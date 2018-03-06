(require '[lumo.build.api :as b])

(b/build "src"
         {:main 'packcljs.core
          :output-to "main.js"
          :target :nodejs})
