#! /usr/bin/env lumo
(ns packcljs.core
  (:require [cljs.nodejs :as node] [clojure.string :as string]))

(def process (node/require "process"))
(def exec-sync (.. (node/require "child_process") -execSync))
(def string-decoder (.. (node/require "string_decoder") -StringDecoder))

(def decoder (string-decoder. "utf8"))
(def release-type (-> (.. process -argv) last string/lower-case string/trim))
(def cmds [(str "npm version " release-type) "git push origin master --tags" "npm publish"])

(when-not (some #(= % release-type) ["patch" "minor" "major"])
  (throw "Wrong type of release provided. You must specify a patch, minor, or major release.")
  (.exit process 1))

(doseq [cmd cmds] (js/console.log (.write decoder (exec-sync cmd))))
