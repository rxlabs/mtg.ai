(ns mtg-gql.core
  (:require [uswitch.lambada.core :refer [deflambdafn]]
            [clojure.data.json :as json]
            [clojure.java.io :as io]))

(defn handle-event
  [event]
  (println "Got the following event: " (pr-str event))
  {:status "ok"})

(defn l-json
  [f in out ctx]
  (let [event (json/read (io/reader in))
        res (f event)]
    (with-open [w (io/writer out)]
      (json/write res w))))

(deflambdafn mtg-gql.core.Handler (partial l-json handle-event))
