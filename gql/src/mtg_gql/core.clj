(ns mtg-gql.core
  (:require
   [uswitch.lambada.core :refer [deflambdafn]]
   [cheshire.core :as json]
   [taoensso.timbre :as log]
   [clojure.java.io :as io]))

(deflambdafn mtg-gql.core.Hello
  [in out context]
  (log/info "Starting Lambda")
  (let [body (-> in io/reader (json/parse-stream keyword))
        result (assoc {} :data (-> body :max num))]
    (with-open [w (io/writer out)]
      (json/generate-stream result w)
      (log/info "Lambda finished"))))
