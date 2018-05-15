(defproject mtg-gql "1.0.0"
  :description "Magic: The Gathering GraphQL API"
  :url "https://github.com/rxlabs/mtg.ai"
  :license {:name "MIT"
            :url "https://opensource.org/licenses/MIT"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [cheshire "5.8.0"]
                 [com.taoensso/timbre "4.10.0"]
                 [uswitch/lambada "0.1.2"] ]
  :uberjar-name "mtg-gql-standalone.jar"
  :profiles {:uberjar {:aot :all}})
