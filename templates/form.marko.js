// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><title>Cadastro</title></head><body><div class=container><h1>Cadastro</h1><br><form action=/alunos method=POST><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "><label for=name>Nome:</label><input type=text name=nome placeholder=nome" +
    marko_attr("value", data.nome) +
    "><label for=email>Email:</label><input type=text name=email placeholder=email" +
    marko_attr("value", data.email) +
    "><fieldset style=margin:5pt><legend>Cursos: </legend><p><label><input name=curso type=radio value=ads" +
    marko_attr("checked", data.curso == "ads") +
    "><span>ADS</span></label></p><p><label><input name=curso type=radio value=ipi" +
    marko_attr("checked", data.curso == "ipi") +
    "><span>Informatica para Internet</span></label></p><p><label><input name=curso type=radio value=qualidade" +
    marko_attr("checked", data.curso == "qualidade") +
    "><span>Qualidade</span></label></p></fieldset><a href=/  style=\"margin-right: 10pt\" class=\"btn-floating btn-small waves-effect waves-light red\"><i class=material-icons>cancel</i></a><button class=\"btn-floating btn-small waves-effect waves-light red\" type=submit><i class=material-icons>save</i></button></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
