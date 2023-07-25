import { Model, createServer, Response } from "miragejs";
import { fakeDatabase } from "../../../database";

type City = {
  city_name: string;
  country: string;
  iso_code: string;
  city_image: string;
};

type Continent = {
  continent_name: string;
  alias: string;
  decoy: string;
  description: string;
  presentation_banner: string;
  page_banner: string;
  amount_countries: string;
  amount_languages: string;
  amount_cities_100: string;
  examples_cities_100: City[];
};

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Partial<Continent>>({}),
    },

    seeds(server) {
      server.create("continent", fakeDatabase.continents[0]);
      server.create("continent", fakeDatabase.continents[1]);
      server.create("continent", fakeDatabase.continents[2]);
      server.create("continent", fakeDatabase.continents[3]);
      server.create("continent", fakeDatabase.continents[4]);
      server.create("continent", fakeDatabase.continents[5]);
    },

    routes() {
      this.namespace = "api";
      this.timing = Math.floor(Math.random() * (1500 - 250 + 1) + 250);

      this.get("/continents", (schema, request) => {
        const allContinents = schema.all("continent");

        if (request.queryParams.sortedAttr) {
          const sortedAttrContinents = allContinents.models.map(
            (continent) => ({
              continentName: continent.attrs.continent_name,
              decoy: continent.attrs.decoy,
            })
          );

          return sortedAttrContinents;
        }

        return allContinents;
      });

      this.get("/continents/:name", (schema, request) => {
        // console.log("mirage params", request.params);
        const name = request.params.name.toLowerCase();

        const continentExists = schema.findBy("continent", {
          alias: name,
        });

        return continentExists;
      });

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
