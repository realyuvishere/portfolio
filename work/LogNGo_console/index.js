(function () {
//    let isLoading = true
//    const comps = ['\\', '|', '/', '-']
//    const loaderElem = document.getElementById('loader')
//    while (isLoading) {
//        comps.forEach(function(item) {
//            setTimeout(function() {
//                loaderElem.innerHTML = item
//            }, 100)
//        })
//    }
//    const windowLoader = document.getElementById('loader')
//    window.onload = function() {
//        isLoading = false
//    }
    
    const mainIO = document.getElementById('console_io')
    const mainConsole = document.getElementById('console')
    const mainInp = document.getElementById('console_input')
    const utilInp = document.getElementById('console_util_input')
    
    const absDirs = [
        {
            name: '',
            subDirs: [
                {
                    name: '',
                    subDirs: [],
                },
            ]
        },
        {
            name: '',
            subDirs: [
                {
                    name: '',
                    subDirs: [],
                },
            ]
        },
        {
            name: '',
            subDirs: [
                {
                    name: '',
                    subDirs: [],
                },
            ]
        },
        {
            name: '',
            subDirs: [
                {
                    name: '',
                    subDirs: [],
                },
            ]
        },
    ]
    
    let currentDirs = [].concat(absDirs)
    
    let cwd = ''
    let utilActive = false
    
    mainConsole.style.minHeight = window.innerHeight - (20 + 95) + 'px'
    
    $(document).ready(function () {
        init()
//        insertConsoleLine()
        
    })
    
    function init() {
        
        const initObj = getUserDeviceDetails()

        const objKeys = Object.keys(initObj).sort()

        objKeys.forEach(function (item, index) {
            printl(initObj[item], index)
            if (index === objKeys.length - 1) {
                window.setTimeout(insertConsoleLine, 6000)
            }
        })
    }
    
    // misc function utilities
    
    function getUserDeviceDetails () {
        const uA = window.navigator.userAgent.split(/[()]/).map(function (item) {
            return item.trim()
        })
        
        const browser = uA[uA.length - 1].split(' ')[0].split('/')
        
        const platform = uA[1].split(';')
        
        const obj = {
            0: 'CPU / OS: ' + platform[1].trim(),
            1: 'status: '.toLocaleUpperCase() + (window.navigator.onLine ? 'online' : 'offline'),
            2: 'browser: '.toLocaleUpperCase() + browser[0] + ' v' + browser[1]  + (window.navigator.vendor ? ' from ' + window.navigator.vendor : ''),
            3: 'lang: '.toLocaleUpperCase() + window.navigator.language,
            4: 'platform: '.toLocaleUpperCase() + platform[0],
            5: ['Initializing root user...', 'Access granted via root user', 'Initializing bash shell...'],
        }
        
        return obj
    }

    // console function utilities
    
    function insertConsoleLine(cd) {
        cd = cd ? cd : '~'
        
        mainInp.blur()
        const tempDiv = document.createElement('div')
        tempDiv.className = 'console_line'
        const innerDiv = document.createElement('div')
        innerDiv.className = 'console_input_text'
        innerDiv.innerHTML = 'root:' + cd + ' root$'
        const innerSpan = document.createElement('pre')
        innerDiv.appendChild(innerSpan)
        tempDiv.appendChild(innerDiv)
        mainConsole.appendChild(tempDiv)
        mainInp.focus()
    }

    function printl(value, delay) {

        if (Array.isArray(value)) {
            
            value.forEach(function (item, index) {
                printl(item, index + delay)
            })
            
        } else {
            
            const tempDiv = document.createElement('div')
            tempDiv.innerHTML = value

            window.setTimeout(function () {
                mainConsole.appendChild(tempDiv)
            }, ((delay >= 6) ? 500 * (delay + 1) : 100 * delay))
            
        }

    }
    
    function takeConsoleSnapshot() {
        const arr = []
        const temp = $(mainConsole).children('div')
        for (let i = 0; i < temp.length; i++) {
            arr.push(window.btoa(temp[i].outerHTML))
        }
        temp.remove()
        window.localStorage.setItem('console_snapshot', JSON.stringify(arr))
        return arr
    }
    
    // util function utilities
    
    function createUtilWrapper(utilName) {
        const wrapper = document.createElement('div')
        wrapper.id = 'util_wrapper'
        wrapper.className = utilName + '_wrapper'
        utilActive = true
        return wrapper
    }
    
    function insertUtilLine() {
        
        mainInp.blur()
        utilInp.blur()
        
        const tempDiv = document.createElement('div')
        tempDiv.className = 'util_line'
        
        const innerDiv = document.createElement('div')
        innerDiv.className = 'console_input_text_util'
        innerDiv.innerHTML = ':'
        
        const innerSpan = document.createElement('pre')
        
        innerDiv.appendChild(innerSpan)
        tempDiv.appendChild(innerDiv)
        
        utilInp.focus()
        
        return tempDiv
    }
    
    function closeUtil() {
        const elem = document.getElementById('util_wrapper')
        elem.parentNode.removeChild(elem)
        
        utilActive = false
        
        const snapshot = JSON.parse(window.localStorage.getItem('console_snapshot'))
        
        snapshot.forEach(function(item) {
            item = window.atob(item)
            mainConsole.innerHTML += item
        })
        
        $('.console_input_text').removeClass('focus')
        
        insertConsoleLine()
    }
    // man bin function utilities
    
    function manUtil(path) {
        
        const manpageData = {
            title: '',
            name: '',
            usage: '',
            description: '',
            options: [],
        }
        
        switch (path) {
            case 'about':
                manpageData.title = 'ABOUT'
                manpageData.name = 'LogNGO: The next generation of CTF and cryptic hunts.'
                manpageData.description = 'Lorem ipsum stuff'
                manpageData.options = [
                    {
                        name: 'man',
                        desc: 'Get the manual pages of a given path, if it\'s valid.'
                    },
                    {
                        name: 'cd',
                        desc: 'Sets the current directory to the specified directory, if valid.'
                    },
                    {
                        name: 'clear',
                        desc: 'Clears all the previously used commands on the terminal.'
                    },
                    {
                        name: 'clearall',
                        desc: 'Behaves like `clear`, but removes the terminal initiation as well.'
                    },
                    {
                        name: 'restart',
                        desc: 'Restarts the whole terminal again, clearing the history of commands.'
                    },
                    {
                        name: 'open',
                        desc: 'Launches the instance for viewing a file or folder.'
                    }
                ]
                break
            default:
                break
        }
        
        const displayOrder = ['name', 'usage', 'description', 'options']
        
        const snapshot = takeConsoleSnapshot()
        
        const mainWrapper = createUtilWrapper('manpage')
        
        const mainHeader = document.createElement('div')
        mainHeader.style.display = 'flex'
        mainHeader.style.alignItems = 'center'
        mainHeader.style.justifyContent = 'space-between'
        mainHeader.style.backgroundColor = 'rgba(255,255,255,0.1)'
        
        const leftH = document.createElement('h3')
        const rightH = document.createElement('h3')
        
        leftH.style.margin = rightH.style.margin = 0
        leftH.style.padding = rightH.style.padding = '10px'
        leftH.innerHTML = rightH.innerHTML = manpageData.title.toLocaleUpperCase()
        
        mainHeader.appendChild(leftH)
        mainHeader.appendChild(rightH)
        
        mainWrapper.appendChild(mainHeader)
        
        
        displayOrder.forEach(function(item, index) {
            if (manpageData[item] != '') {
                const elem = renderManSection(manpageData[item], item)
                mainWrapper.appendChild(elem)
            } else {
                return
            }
        })
        
        mainWrapper.appendChild(insertUtilLine())
        
        mainConsole.appendChild(mainWrapper)
        
        
    }
    
    function renderManSection(obj, header) {
        
        const wrapperDiv = document.createElement('div')
        wrapperDiv.className = 'man_section_wrapper'
        
        const headingDiv = document.createElement('div')
        headingDiv.className = 'man_heading'
        const headingH = document.createElement('h4')
        headingH.innerHTML = header.toLocaleUpperCase()
        
        headingDiv.appendChild(headingH)
        
        const contentDiv = document.createElement('div')
        contentDiv.className = 'man_content'
        
        const innerDiv = document.createElement('div')
        
        if (Array.isArray(obj)) {
            
            obj.forEach(function(item, index) {
                
                const arrItemWrapper = document.createElement('div')
                arrItemWrapper.className = 'man_content_option_wrapper'
                
                const arrItemInnerDiv = document.createElement('div')
                
                const arrItemName = document.createElement('div')
                arrItemName.innerHTML = item.name
                
                const arrItemDesc = document.createElement('div')
                arrItemDesc.innerHTML = item.desc
                
                arrItemInnerDiv.appendChild(arrItemName)
                arrItemInnerDiv.appendChild(arrItemDesc)
                
                arrItemWrapper.appendChild(arrItemInnerDiv)
                
                innerDiv.appendChild(arrItemWrapper)
                
            })
            
        } else {
            
            const innerDivContent = document.createElement('div')
            innerDivContent.innerHTML = obj
            
            innerDiv.appendChild(innerDivContent)
            
        }
        
        contentDiv.appendChild(innerDiv)
        wrapperDiv.appendChild(headingDiv)
        wrapperDiv.appendChild(contentDiv)
        
        return wrapperDiv
    }

    // Event listeners 
    
    // Handler callbacks
    
    const handleKeyEventMainInp = function (e) {
        if (e.which === 9) {
            e.preventDefault()   
        }
        
        if (e.which === 13) {
            switch (mainInp.value.toLocaleLowerCase().trim()) {
                case 'clear':
                    $('.console_line').remove()
                    insertConsoleLine(cwd)
                    break
                case 'clearall':
                    $('#console div').remove()
                    insertConsoleLine(cwd)
                    break
                case 'restart':
                    $('#console div').remove()
                    init()
                    break
                case 'man about':
                    manUtil('about')
                    break
                default:
                    insertConsoleLine(cwd)
                    break
            }
            mainInp.value = ''
        }
        
    }
    
    const handleKeyEventUtilInp = function (e) {
        
        if (e.which === 81) {
            e.preventDefault()
            closeUtil()
        }
        
    }
    
    // Main input listeners
    mainInp.onfocus = function () {
        const elems = $('.console_input_text')
        $(elems[elems.length-1]).addClass('focus')
        var that = this
        setTimeout(function() {
            that.selectionStart = that.selectionEnd = that.value.length
        }, 0)
    }
    
    mainInp.onblur = function () {
        $('.console_input_text').removeClass('focus')
    }
    
    mainInp.onkeydown = handleKeyEventMainInp

    mainInp.oninput = function (e) {
        $('.console_input_text.focus').children('pre')[0].innerHTML = e.target.value
    }
    
    // Util input listeners
    
    utilInp.onfocus = function () {
        const elems = $('.console_input_text_util')
        $(elems[elems.length-1]).addClass('focus')
        var that = this
        setTimeout(function() {
            that.selectionStart = that.selectionEnd = that.value.length
        }, 0)
    }
    
    utilInp.onblur = function () {
        $('.console_input_text_util').removeClass('focus')
    }
    
    utilInp.onkeydown = handleKeyEventUtilInp
    
    utilInp.oninput = function (e) {
        $('.console_input_text_util.focus').children('pre')[0].innerHTML = e.target.value
    }
    
    // Main console listeners
    
    $(mainConsole).on('click', function () {
        if (utilActive) {
            $(utilInp).focus()
        } else {
            $(mainInp).focus()
        }
    })
    
    // https://stackoverflow.com/questions/2896626/switch-statement-for-string-matching-in-javascript
})()