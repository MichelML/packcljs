#! /usr/bin/env lumo
(require '[cljs.nodejs :as node])
(require '[clojure.string :as string])

(def process (node/require "process"))
(def string-decoder (.. (node/require "string_decoder") -StringDecoder))
(def exec-sync (.. (node/require "child_process") -execSync))
(def decoder (string-decoder. "utf8"))
(def release-type (-> (.. process -argv) last string/lower-case string/trim))
(def cmds [(str "npm version " release-type) "git push origin master --tags" "npm publish"])

(if-not (some #(= % release-type) ["patch" "minor" "major"])
  (do 
    (throw "Wrong type of release provided. You must specify a patch, minor, or major release.")
    (.exit process 1)))

(doseq [cmd cmds] (js/console.log (decoder.write (exec-sync cmd))))
