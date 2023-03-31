/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tarifler").insert([{ tarif_adi: "Spagetti Bolonez" }]);
  await knex("adimlar").insert([
    {
      adim_sirasi: 1,
      adim_talimati: "derin bir tencereye sıcak su koyun ",
      tarif_id: 1,
    },
    {
      adim_sirasi: 2,
      adim_talimati: "üzerine biraz tuz serpin",
      tarif_id: 1,
    },
    {
      adim_sirasi: 3,
      adim_talimati: "makarnaları ekleyip, yumuşayana kadar haşlayın",
      tarif_id: 1,
    },
  ]);
  await knex("icindekiler").insert([
    { icindekiler_adi: "sıcak su", miktar: "1 litre" },
    { icindekiler_adi: "tuz", miktar: "1 tutam" },
    { icindekiler_adi: "makarna", miktar: "1 Paket" },
  ]);
  await knex("icindekiler_adimlar").insert([
    { icindekiler_id: 1, adim_id: 1 },
    { icindekiler_id: 2, adim_id: 2 },
    { icindekiler_id: 3, adim_id: 3 },
  ]);
};
