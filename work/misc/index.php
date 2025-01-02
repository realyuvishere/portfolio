<?php

/**
 * Slimdown - A simple regex-based Markdown parser in PHP. Supports the
 * following elements (and can be extended via `Slimdown::add_rule()`):
 *
 * - Headers
 * - Links
 * - Bold
 * - Emphasis
 * - Deletions
 * - Quotes
 * - Code blocks
 * - Inline code
 * - Blockquotes
 * - Ordered/unordered lists
 * - Horizontal rules
 * - Images
 *
 * Author: Johnny Broadway <johnny@johnnybroadway.com>
 * Website: https://github.com/jbroadway/slimdown
 * License: MIT
 */
class Slimdown {
	public static $rules = array (
		'/```(.*?)```/s' => self::class .'::code_parse',                                                          // code blocks
		'/\n(#+)\s+(.*)/' => self::class .'::header',                                                             // headers
		'/\!\[([^\[]*?)\]\(([^\)]+)\)/' => self::class .'::img',                                                  // images
		'/\[([^\[]+)\]\(([^\)]+)\)/' => self::class .'::link',                                                    // links
		'/(\*\*|__)(?=(?:(?:[^`]*`[^`\r\n]*`)*[^`]*$))(?![^\/<]*>.*<\/.+>)(.*?)\1/' => '<strong>\2</strong>',     // bold
		'/(\*|_)(?=(?:(?:[^`]*`[^`\r\n]*`)*[^`]*$))(?![^\/<]*>.*<\/.+>)(.*?)\1/' => '<em>\2</em>',                // emphasis
		'/(\~\~)(?=(?:(?:[^`]*`[^`\r\n]*`)*[^`]*$))(?![^\/<]*>.*<\/.+>)(.*?)\1/' => '<del>\2</del>',              // del
		'/\:\"(.*?)\"\:/' => '<q>\1</q>',                                                                         // quote
		'/`(.*?)`/' => '<code>\1</code>',                                                                         // inline code
		'/(\n[\*|\-] )\[x\]/' => '\1<input type=\'checkbox\' disabled checked>',                                  // checkbox checked
		'/(\n[\*|\-] )\[\ \]/' => '\1<input type=\'checkbox\' disabled>',                                         // checkbox unchecked
		'/\n[\*|\-] (.*)/' => self::class .'::ul_list',                                                           // ul lists
		'/\n[0-9]+\.(.*)/' => self::class .'::ol_list',                                                           // ol lists
		'/\n(&gt;|\>)(.*)/' => self::class .'::blockquote',                                                       // blockquotes
		'/\n-{5,}/' => "\n<hr>",                                                                                  // horizontal rule
		'/\n([^\n]+)\n/' => self::class .'::para',                                                                // add paragraphs
		'/<\/ul>\s?<ul>/' => '',                                                                                  // fix extra ul
		'/<\/ol>\s?<ol>/' => '',                                                                                  // fix extra ol
		'/<\/blockquote><blockquote>/' => "\n",                                                                   // fix extra blockquote
		'/<a href=\'(.*?)\'>/' => self::class .'::fix_link',                                                      // fix links
		'/<img src=\'(.*?)\'/' => self::class .'::fix_img',                                                       // fix images
		'/<p>{{{([0-9]+)}}}<\/p>/s' => self::class .'::reinsert_code_blocks'                                      // re-insert code blocks
	);

	private static $code_blocks = [];
	
	private static function code_parse ($regs) {
		$item = $regs[1];
		$item = htmlentities ($item, ENT_COMPAT);
		$item = str_replace ("\n\n", '<br>', $item);
		$item = str_replace ("\n", '<br>', $item);
		while (mb_substr ($item, 0, 4) === '<br>') {
			$item = mb_substr ($item, 4);
		}
		while (mb_substr ($item, -4) === '<br>') {
			$item = mb_substr ($item, 0, -4);
		}
		// Store code blocks with placeholders to avoid other regexes affecting them
		self::$code_blocks[] = sprintf ("<pre><code>%s</code></pre>", trim ($item));
		return sprintf ("{{{%d}}}", count (self::$code_blocks) - 1);
	}

	private static function reinsert_code_blocks ($regs) {
		// Reinsert the stored code blocks at the end
		$index = $regs[1];
		return self::$code_blocks[$index];
	}

	private static function para ($regs) {
		$line = $regs[1];
		$trimmed = trim ($line);
		if (preg_match ('/^<\/?(ul|ol|li|h|p|bl|table|tr|th|td|code)/', $trimmed)) {
			return "\n" . $line . "\n";
		}
		if (! empty ($trimmed)) {
			return sprintf ("\n<p>%s</p>\n", $trimmed);
		}
		return $trimmed;
	}

	private static function ul_list ($regs) {
		$item = $regs[1];
		return sprintf ("\n<ul>\n\t<li>%s</li>\n</ul>", trim ($item));
	}

	private static function ol_list ($regs) {
		$item = $regs[1];
		return sprintf ("\n<ol>\n\t<li>%s</li>\n</ol>", trim ($item));
	}

	private static function blockquote ($regs) {
		$item = $regs[2];
		return sprintf ("\n<blockquote>%s</blockquote>", trim ($item));
	}

	private static function header ($regs) {
		list ($tmp, $chars, $header) = $regs;
		$level = strlen ($chars);
		return sprintf ('<h%d>%s</h%d>', $level, trim ($header), $level);
	}

	private static function link ($regs) {
		list ($tmp, $text, $link) = $regs;
		// Substitute _ and * in links so they don't break the URLs
		$link = str_replace (['_', '*'], ['{^^^}', '{~~~}'], $link);
		return sprintf ('<a href=\'%s\'>%s</a>', $link, $text);
	}

	private static function img ($regs) {
		list ($tmp, $text, $link) = $regs;
		// Substitute _ and * in links so they don't break the URLs
		$link = str_replace (['_', '*'], ['{^^^}', '{~~~}'], $link);
		return sprintf ('<img src=\'%s\' alt=\'%s\'>', $link, $text);
	}

	private static function fix_link ($regs) {
		// Replace substitutions so links are preserved
		$fixed_link = str_replace (['{^^^}', '{~~~}'], ['_', '*'], $regs[1]);
		return sprintf ('<a href=\'%s\'>', $fixed_link);
	}

	private static function fix_img ($regs) {
		// Replace substitutions so links are preserved
		$fixed_link = str_replace (['{^^^}', '{~~~}'], ['_', '*'], $regs[1]);
		return sprintf ('<img src=\'%s\'', $fixed_link);
	}

	/**
	 * Add a rule.
	 */
	public static function add_rule ($regex, $replacement) {
		self::$rules[$regex] = $replacement;
	}

	/**
	 * Render some Markdown into HTML.
	 */
	public static function render ($text) {
		self::$code_blocks = [];
		$text = "\n" . $text . "\n";
		foreach (self::$rules as $regex => $replacement) {
			if (is_callable ( $replacement)) {
				$text = preg_replace_callback ($regex, $replacement, $text);
			} else {
				$text = preg_replace ($regex, $replacement, $text);
			}
		}
		return trim ($text);
	}
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>yuvishere | misc projects</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
        <link rel="icon" href="../../lib/assets/logo.png">
    </head>
    <body>
        <div class="container mt-5">
            <h1 class="mb-4">Miscellaneous Projects</h1>

			<h3>Self hosted</h3>
            <div class="row">
                <div class="table-responsive">
                    <table class="table">
                        <tr>
                            <th>Project</th>
                            <th>Deployed link</th>
                            <th>README</th>
                        </tr>
                        <?php
                        $folders = array_filter(glob('./*'), 'is_dir');

                        foreach ($folders as $folder) {
                            $folderName = basename($folder);
                            $readmePath = $folder . '/README.md';
                            $hasReadme = file_exists($readmePath);
                            $readmeLink = $hasReadme ? "<button class='btn btn-link' data-bs-toggle='collapse' data-bs-target='#collapse$folderName' aria-expanded='true' aria-controls='collapse$folderName'>README</button>" : "No README";

                            echo "<tr>
                                    <td>$folderName</td>
                                    <td><a href='$folder' class='btn btn-link'><i class='fas fa-link'></i></a></td>
                                    <td id='heading$folderName'>$readmeLink</td>
                                  </tr>";
                            
                            if ($hasReadme) {
                            
                                echo "<tr>
                                        <td colspan='3'>
                                            <div class='accordion' id='accordion$folderName'>
                                                <div class='accordion-item'>
                                                    <div id='collapse$folderName' class='accordion-collapse collapse' aria-labelledby='heading$folderName' data-bs-parent='#accordion$folderName'>
                                                        <div class='accordion-body'>
                                                            <p>" . Slimdown::render(file_get_contents($readmePath)) . "</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>";
                            }
                        }
                        ?>
                    </table>
                </div>
            </div>

			<h3>GitHub hosted</h3>
			<div class="row">
                <div class="table-responsive">
                    <table class="table">
                        <tr>
                            <th>Project name</th>
							<th>Description</th>
                            <th>Deployed link</th>
                            <th>GitHub repo link</th>
                        </tr>
                        <?php
						$data = json_decode(file_get_contents('./projects.json'), true);
						foreach ($data as $project) {
							?>
							<tr>
								<td><?= $project['name'] ?></td>
								<td><?= $project['description'] ?></td>
								<td><a href="<?= $project['deployed_link'] ?>" class="btn btn-link"><i class="fas fa-link"></i></a></td>
								<td><a href="<?= $project['github_link'] ?>" class="btn btn-dark"><i class="fab fa-github"></i></a></td>
							<?php
						}
                        ?>
                    </table>
                </div>
            </div>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <!--        <script src="https://realyuvishere.github.io/Web_Development_Folder/templates/Libraries/ripple_effect_v0.3/ripple_effect_v0.3/ripple_effect.min.js"></script>-->
        <script defer src="https://use.fontawesome.com/releases/v5.4.1/js/all.js" integrity="sha384-L469/ELG4Bg9sDQbl0hvjMq8pOcqFgkSpwhwnslzvVVGpDjYJ6wJJyYjvG3u8XW7" crossorigin="anonymous"></script>
    </body>
</html>