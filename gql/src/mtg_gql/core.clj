(ns mtg-gql.core
  (:gen-class
   :methods [^:static [handler [String] String]]))

(defn -handler
  "Simple handler, accepts a <string> and returns 'Hello <string>!'"
  [s]
  (str "Hello " s "!"))
