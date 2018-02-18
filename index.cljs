#! /usr/bin/env lumo
(require '[cljs.nodejs :as node])
(refer 'clojure.string :only '[lower-case])

(def process (node/require "process"))
(def exec-sync (.. (node/require "child_process") -execSync))
(def release-type (-> argv last lower-case))
(def cmds [(str "npm version" release-type) "git push origin master --tags" "npm publish"])

(if-not (get ["patch" "minor" "major"] release-type)
  (do 
    (js/throw "Wrong type of release provided. You must specify a patch, minor, or major release.")
    (.exit process 1)))

(doseq [cmd cmds] (js/console.log (exec-sync cmd #{:encoding "utf-8"})))
