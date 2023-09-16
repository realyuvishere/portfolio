<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Simple csv to html</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>

        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mainNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="input-group">
                                <input type="text" class="form-control" id="keyword" placeholder="Keyword">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-light" type="button" id="highlight_keys">Highlight</button>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="input-group">
                                <input type="text" class="form-control" id="show_what" placeholder="Show only ...">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-light" type="button" id="show_only">Sort</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main style="margin-top: 54px;">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="thead-light">
                        <?php
                        
                        $file = fopen("lib/files/input.csv","r") or die("no file found");
                        echo "<tr>";
                        foreach(fgetcsv($file) as $value){
                            if($value != ''){
                                echo "<th scope=\"col\">".$value."</th>";
                            }
                        }
                        echo "</tr>";
                        ?>
                    </thead>
                    <tbody>
                        <?php
                        while(!feof($file)) {
                            echo "<tr>";
                            foreach(fgetcsv($file) as $value){
                                if($value != ''){
                                    echo "<td>".$value."</td>";
                                }
                            }
                            echo "</tr>";
                        }
                        fclose($file);
                        ?>
                    </tbody>
                </table>
            </div>
        </main>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script>
            $('#show_only').on('click', function(){
                var categ = $('#show_what').val().toLowerCase();
                $('tbody').children('tr').each(function(){
                    if($(this).children().length == 0){
                        $(this).remove();
                    } else {
                        var colText = $(this).children('td')[3].innerHTML;
                        if (colText.toLowerCase().indexOf(categ) == -1){
                            $(this).remove();
                        }
                    }
                })
            })
            $('#highlight_keys').on('click', function(){
                var newKeyword = $('#keyword').val().toLowerCase();
                $('tbody').children('tr').each(function(){
                    $(this).removeAttr('class')
                    if($(this).children().length == 0){
                        $(this).remove();
                    } else {
                        var colText = $(this).children('td')[4].innerHTML;
                        if (colText.toLowerCase().indexOf(newKeyword) > -1){
                            $(this).addClass('table-success');
                        }
                    }
                })
            })
        </script>
    </body>
</html>