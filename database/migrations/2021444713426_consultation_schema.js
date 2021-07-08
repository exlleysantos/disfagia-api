"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ConsultationSchema extends Schema {
  up() {
    this.create("consultations", (table) => {
      table.increments();

      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("cascade")
        .index("user_consultation_id");

      table
        .integer("healthcare_professional_id")
        .unsigned()
        .references("id")
        .inTable("healthcare_professionals")
        .onDelete("cascade")
        .index("healthcare_professional_ consultation_id");

      table.string("observation", 500);

      table.timestamps();
    });
  }

  down() {
    this.drop("consultations");
  }
}

module.exports = ConsultationSchema;
