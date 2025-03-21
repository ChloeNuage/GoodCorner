import {DataSource } from "typeorm";

const dataSource = new DataSource ({
  type: "sqlite",
  database: "good_corner.sqlite",
  entities: [],
  synchronize: true,
})
