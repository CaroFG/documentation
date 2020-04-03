(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{324:function(e,t,a){"use strict";a.r(t);var s=a(8),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("h2",{attrs:{id:"download-and-launch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-and-launch"}},[e._v("#")]),e._v(" Download and launch")]),e._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"cURL"}},[a("p",[e._v("Download the "),a("strong",[e._v("latest stable release")]),e._v(" of MeiliSearch with "),a("strong",[e._v("curl")]),e._v(".")]),e._v(" "),a("p",[e._v("Launch MeiliSearch to start the server.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L https://install.meilisearch.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n$ ./meilisearch\nServer is listening on: http://127.0.0.1:7700\n")])])])]),e._v(" "),a("Tab",{attrs:{label:"Brew"}},[a("p",[e._v("Download the "),a("strong",[e._v("latest stable release")]),e._v(" of MeiliSearch with "),a("strong",[e._v("Homebrew")]),e._v(".")]),e._v(" "),a("p",[e._v("Launch MeiliSearch to start the server.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ brew update "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" brew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" meilisearch\n$ meilisearch\nServer is listening on: http://127.0.0.1:7700\n")])])])]),e._v(" "),a("Tab",{attrs:{label:"Docker"}},[a("p",[e._v("Using "),a("strong",[e._v("Docker")]),e._v(" you can choose to run "),a("a",{attrs:{href:"https://hub.docker.com/r/getmeili/meilisearch/tags",target:"_blank",rel:"noopener noreferrer"}},[e._v("any available tags"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("This command starts the "),a("strong",[e._v("latest stable release")]),e._v(" of MeiliSearch.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7700")]),e._v(":7700 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/data.ms:/data.ms "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    getmeili/meilisearch\nServer is listening on: http://0.0.0.0:7700\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Data written to a Docker container is not persistent and is deleted along with the container when the latter is stopped. Docker volumes are not deleted when containers are removed. It is then recommended to share volumes between your containers and your host machine to provide persistent storage. MeiliSearch writes data to "),a("code",[e._v("/data.ms")])])])]),e._v(" "),a("Tab",{attrs:{label:"APT"}},[a("p",[e._v("Download the "),a("strong",[e._v("latest stable release")]),e._v(" of MeiliSearch with "),a("strong",[e._v("APT")]),e._v(".")]),e._v(" "),a("p",[e._v("Launch MeiliSearch to start the server.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deb [trusted=yes] https://apt.fury.io/meilisearch/ /"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/apt/sources.list.d/fury.list\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" meilisearch-http\n$ meilisearch\nServer is listening on: http://127.0.0.1:7700\n")])])])]),e._v(" "),a("Tab",{attrs:{label:"Source"}},[a("p",[e._v("MeiliSearch is written in "),a("code",[e._v("Rust")]),e._v(". To compile it, "),a("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("installing the Rust toolchain"),a("OutboundLink")],1),e._v(" is required.")]),e._v(" "),a("p",[e._v("If the Rust toolchain is already installed, clone the repository on your local system and change it to your working directory.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/meilisearch/MeiliSearch\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" MeiliSearch\n")])])]),a("p",[e._v("In the cloned repository, compile MeiliSearch.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Update the rust toolchain to the latest version")]),e._v("\n$ rustup update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Compile the project")]),e._v("\n$ cargo build --release\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Execute the server binary")]),e._v("\n$ ./target/release/meilisearch\n")])])])])],1),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ ./meilisearch --help\nmeilisearch-http 0.9.0\n\nUSAGE:\n    meilisearch [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --db-path <db-path>              The destination where the database must be created. [env: MEILI_DB_PATH=]\n                                         [default: ./data.ms]\n        --env <env>                      This environment variable must be set to `production` if your are running in\n                                         production. Could be `production` or `development` - `production`: Force api\n                                         keys - `development`: Show logs in "info" mode + not mendatory to specify the\n                                         api keys [env: MEILI_ENV=]  [default: development]  [possible values:\n                                         development, production]\n        --http-addr <http-addr>          The address on which the http server will listen. [env: MEILI_HTTP_ADDR=]\n                                         [default: 127.0.0.1:7700]\n        --master-key <master-key>        The master key allowing you to do everything on the server. [env:\n                                         MEILI_MASTER_KEY=]\n        --no-analytics <no-analytics>    Do not send analytics to Meili. [env: MEILI_NO_ANALYTICS=]\n')])])]),a("h2",{attrs:{id:"environment-variables-and-flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables-and-flags"}},[e._v("#")]),e._v(" Environment variables and Flags")]),e._v(" "),a("p",[e._v("Flags can be added on launch.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ./meilisearch --db-path ./meilifiles --http-addr 127.0.0.1:7700\nServer is listening on: http://127.0.0.1:7700\n")])])]),a("p",[e._v("Here is the list of "),a("strong",[e._v("all Environment variables and Flags")]),e._v(" (CLI options).")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Environment Variable")]),e._v(" "),a("th",[e._v("CLI option")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("MEILI_DB_PATH")])]),e._v(" "),a("td",[e._v("--db-path")]),e._v(" "),a("td",[e._v("Defines the location for the database files")]),e._v(" "),a("td",[e._v('"./data.ms"')])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("MEILI_HTTP_ADDR")])]),e._v(" "),a("td",[e._v("--http-addr")]),e._v(" "),a("td",[e._v("Address and port to listen to")]),e._v(" "),a("td",[e._v('"127.0.0.1:7700"')])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("MEILI_MASTER_KEY")])]),e._v(" "),a("td",[e._v("--master-key")]),e._v(" "),a("td",[e._v("Default admin API key")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("MEILI_NO_ANALYTICS")])]),e._v(" "),a("td",[e._v("--no-analytics")]),e._v(" "),a("td",[e._v("Deactivates analytics. Analytics allow us to know how many users are using MeiliSearch, which versions and which platforms are used. This process is entirely anonymous.")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("MEILI_ENV")])]),e._v(" "),a("td",[e._v("--env")]),e._v(" "),a("td",[e._v("Defines the running environment of MeiliSearch. Can be set to "),a("code",[e._v("production")]),e._v(" or "),a("code",[e._v("development")]),e._v(".")]),e._v(" "),a("td",[e._v('"development"')])])])]),e._v(" "),a("h3",{attrs:{id:"environments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environments"}},[e._v("#")]),e._v(" Environments")]),e._v(" "),a("p",[e._v("By default, MeiliSearch runs in "),a("code",[e._v("development")]),e._v(" mode.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Production")]),e._v(": the "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/authentication.html"}},[e._v("master key")]),e._v(" is "),a("strong",[e._v("mandatory")]),e._v(".")],1),e._v(" "),a("li",[a("code",[e._v("Development")]),e._v(": the "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/authentication.html"}},[e._v("master key")]),e._v(" is "),a("strong",[e._v("optional")]),e._v(', and logs are output in "info" mode ('),a("em",[e._v("console output")]),e._v(").")],1)])],1)}),[],!1,null,null,null);t.default=n.exports}}]);