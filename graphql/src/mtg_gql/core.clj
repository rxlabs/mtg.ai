(ns mtg-gql.core
  (:require
   [uswitch.lambada.core :refer [deflambdafn]]
   [cheshire.core :as json]
   [taoensso.timbre :as log]
   [clojure.java.io :as io]))

(defn graphql [body ctx] body)

(defn handle-json
  [f in out ctx]
  (let [body (-> in io/reader (json/parse-stream keyword))
        res (f body ctx)]
    (with-open [w (io/writer out)]
      (json/generate-stream res w))))

(deflambdafn mtg-gql.core.GraphQL
  [in out ctx]
  (handle-json graphql in out ctx))
