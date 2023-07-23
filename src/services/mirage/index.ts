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
  decoy: string;
  description: string;
  presentation_banner: string;
  page_banner: string;
  amount_countries: string;
  amount_languages: string;
  amount_cities_100: string;
  examples_cities_100: City[];
};

type Continents = {
  continents: Continent[];
};

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Partial<Continent>>({}),
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/continents", (schema, request) => {
        return new Response(200, {}, { ...fakeDatabase });
      });

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
