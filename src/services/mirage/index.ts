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

type SortedContinent = Pick<
  Continent,
  "continent_name" | "alias" | "decoy" | "presentation_banner"
>;

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Partial<Continent>>({}),
    },

    seeds(server) {
      server.create("continent", fakeDatabase.continents[0] as any);
      server.create("continent", fakeDatabase.continents[1] as any);
      server.create("continent", fakeDatabase.continents[2] as any);
      server.create("continent", fakeDatabase.continents[3] as any);
      server.create("continent", fakeDatabase.continents[4] as any);
      server.create("continent", fakeDatabase.continents[5] as any);
    },

    routes() {
      this.namespace = "api";
      this.timing = Math.floor(Math.random() * (1500 - 250 + 1) + 250);

      this.get("/continents", (schema, request) => {
        const allContinents = schema.all("continent");

        if (request.queryParams.sortedAttr) {
          const sortedAttrContinents = allContinents.models.map(
            (continent) => ({
              //@ts-ignore
              continent_name: continent.attrs.continent_name,
              //@ts-ignore
              decoy: continent.attrs.decoy,
              //@ts-ignore
              alias: continent.attrs.alias,
              //@ts-ignore
              presentation_banner: continent.attrs.presentation_banner,
            })
          );

          console.log("sortedAttrContinents", sortedAttrContinents);

          return new Response(200, {}, sortedAttrContinents);
        }

        return new Response(200, {}, allContinents);
      });

      this.get("/continents/:name", (schema, request) => {
        // console.log("mirage params", request.params);
        const name = request.params.name.toLowerCase();

        const continentExists = schema.findBy("continent", {
          //@ts-ignore
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
