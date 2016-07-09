exports.extensions = {
  supported: [
    { icon: "actionscript", extensions: ["as"] },
    { icon: "angular", extensions: [] },
    { icon: "apache", extensions: ["htaccess"] },
    { icon: "applescript", extensions: ["app"] },
    { icon: "asp", extensions: ["asp"] },
    { icon: "autohotkey", extensions: ["ahk"] },
    { icon: "babel", extensions: ["babelrc"] },
    { icon: "binary", extensions: ["bin", "o", "a", "exe", "obj", "lib", "dll", "pyc"] }, // http://www.file-extensions.org/filetype/extension/name/binary-files
    { icon: "blade", extensions: [] },
    { icon: "bower", extensions: ["bowerrc"] },
    { icon: "bower", extensions: ["bower"], special:"json" },
    { icon: "c", extensions: ["c"] },
    { icon: "cheader", extensions: ["h"] },
    { icon: "c++", extensions: ["cpp", "hpp", "cc", "cxx"] },
    { icon: "cake", extensions: ["cake"] },
    { icon: "cfm", extensions: ["cfm", "cfc", "lucee"] },
    { icon: "clojure", extensions: ["clojure", "cjm"] },
    { icon: "coffescript", extensions: ["coffee"] },
    { icon: "config", extensions: ["env","ini", "makefile"] },
    { icon: "compass", extensions: [] },
    { icon: "cs", extensions: ["cs"] },
    { icon: "cshtml", extensions: ["cshtml"] },
    { icon: "css", extensions: ["css"] },
    { icon: "cucumber", extensions: ["feature"] },
    { icon: "dlang", extensions: ["d"] },
    { icon: "docker", extensions: ["dockerfile"] },
    { icon: "editorconfig", extensions: ["editorconfig"] },
    { icon: "elixir", extensions: ["ex", "exs", "eex"] },
    { icon: "erlang", extensions: ["erl", "hrl", "emakefile", "emakerfile"] },
    { icon: "eslint", extensions: ["eslintrc", "eslintignore"] },
    { icon: "favicon", extensions: ["favicon"], special: "ico" },
    { icon: "font", extensions: ["woff", "woff2", "ttf", "otf", "eot", "pfa", "pfb", "sfd"] },
    { icon: "fsharp", extensions: ["fs", "fsx", "fsi"] },
    { icon: "git", extensions: ["gitattributes", "gitignore", "gitmodules"] },
    { icon: "go", extensions: ["go"] },
    { icon: "gradle", extensions: ["gradle"] },
    { icon: "graphviz", extensions: [] },
    { icon: "groovy", extensions: [] },
    { icon: "gruntfile", extensions: ["gruntfile"], special: "js" },
    { icon: "gulpfile", extensions: ["gulpfile"], special: "js" },
    { icon: "haml", extensions: ["haml"] },
    { icon: "handlebars", extensions: ["hbs", "handlebars"] },
    { icon: "haskell", extensions: ["has", "hs", "lhs", "lit", "gf"] },
    { icon: "haxe", extensions: ["hxml"] },
    { icon: "html", extensions: ["htm", "html"] },
    { icon: "image", extensions: ["jpeg", "jpg", "gif", "png", "bmp"] },
    { icon: "ionic", extensions: ["ionic"], special:"project" },
    { icon: "jade", extensions: ["jade", "pug"] },
    { icon: "java", extensions: ["java"] },
    { icon: "js", extensions: ["js"] },
    { icon: "jsp", extensions: ["jsp"] },
    { icon: "julia", extensions: ["jl"] },
    { icon: "log", extensions: ["log"] },
    { icon: "less", extensions: ["less"] },
    { icon: "license", extensions: ["license"] },
    { icon: "lisp", extensions: ["bil"] },
    { icon: "lsl", extensions: ["lsl"] },
    { icon: "lua", extensions: ["lua"] },
    { icon: "markdown", extensions: ["md"] },
    { icon: "markup", extensions: [] },
    { icon: "matlab", extensions: ["m", "fig", "mat", "mex", "mexn", "mexrs6", "mn", "mum", "mx", "mx3", "rwd", "slx", "slddc", "smv", "tikz", "xvc", "xvc"] },
    { icon: "mustache", extensions: ["mustache", "mst"] },
    { icon: "nim", extensions: ["nim", "nims", "cfg"] },
    { icon: "node", extensions: ["json"] },
    { icon: "node2", extensions: ["nvmrc"] },
    { icon: "npm", extensions: ["npmignore"]},
    { icon: "ocaml", extensions: ["cma", "cmi", "ml", "mly", "ocamlmakefile"] },
    { icon: "perl", extensions: ["perl"] },
    { icon: "php", extensions: ["php", "php1", "php2", "php3", "php4", "php5", "php6", "phps", "phpsa", "phpt"] },
    { icon: "procfile", extensions: ["procfile"] },
    { icon: "powershell", extensions: ["ps1", "psm1", "psd1"] },
    { icon: "puppet", extensions: ["epp"] },
    { icon: "python", extensions: ["py"] },
    { icon: "r", extensions: ["r"] },
    { icon: "rails", extensions: [] },
    { icon: "reactjs", extensions: ["jsx"] },
    { icon: "reactts", extensions: ["tsx"] },
    { icon: "robotframework", extensions: ["robot"] },
    { icon: "ruby", extensions: ["rb", "gemfile"] },
    { icon: "ruby", extensions: ["gemfile"], special: "lock" },
    { icon: "rust", extensions: ["rs"] },
    { icon: "sass", extensions: ["sass"] },
    { icon: "scala", extensions: ["scala"] },
    { icon: "scss", extensions: ["scss"] },
    { icon: "settings", extensions: [] },
    { icon: "shell", extensions: ["bat", "sh", "cmd", "bash", "zsh", "fish"] },
    { icon: "slim", extensions: [] },
    { icon: "source", extensions: [] },
    { icon: "sql", extensions: ["sql"] },
    { icon: "stylelint", extensions: ["stylelintrc"] },
    { icon: "stylelint", extensions: ["stylelint.config"], special: "js" },
    { icon: "stylus", extensions: ["styl"] },
    { icon: "svg", extensions: ["svg"] },
    { icon: "swift", extensions: ["swift"] },
    { icon: "tcl", extensions: ["tcl"] },
    { icon: "tex", extensions: ["texi"] },
    { icon: "text", extensions: ["txt"] },
    { icon: "textile", extensions: ["textile"] },
    { icon: "twig", extensions: ["twig"] },
    { icon: "typescript", extensions: ["ts"] },
    { icon: "typescriptdef", extensions: [".d.ts"], special:"ts" },
    { icon: "vbhtml", extensions: ["vbhtml"] },
    { icon: "vue", extensions: ["vue"] },
    { icon: "vscode", extensions: ["vscodeignore", "launch", "jsconfig", "tsconfig"], special: "json" },
    { icon: "xml", extensions: ["xml", "axml", "xaml"] },
    { icon: "yaml", extensions: ["yml", "yaml"] },
    { icon: "zip", extensions: ["zip", "rar", "7z", "tar", "gz", "bzip2", "xz", "bz2"] }
  ],
  "parse": function(){
    var s = this.replace(/\./g,'_');
    if((/^\d/).test(s)) return 'n' + s;
    return s;
  }
};
