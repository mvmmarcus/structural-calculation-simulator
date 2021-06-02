export const calcReacaoD = (
  carga_p,
  carga_distribuida,
  mod_elast_arame_bc,
  mod_elast_arame_de,
  area_arame_bc,
  area_arame_de,
  comp_arame_bc,
  comp_arame_de,
  dist_pt_ac,
  dist_pt_ce,
  dist_pt_ef
) => {
  let reacao_d =
    (2 *
      carga_distribuida *
      (dist_pt_ce + dist_pt_ef) *
      ((dist_pt_ce + dist_pt_ef) / 2 + dist_pt_ac) +
      (carga_distribuida / 2) * Math.pow(dist_pt_ac, 2) +
      carga_p * (dist_pt_ac + dist_pt_ce)) /
    (dist_pt_ac +
      dist_pt_ce +
      ((mod_elast_arame_bc * area_arame_bc) /
        (mod_elast_arame_de * area_arame_de)) *
        (comp_arame_de / comp_arame_bc) *
        (Math.pow(dist_pt_ac, 2) / (dist_pt_ac + dist_pt_ce)));

  return parseFloat(reacao_d.toFixed(2));
};

export const calcReacaoB = (
  result_reacao_d,
  mod_elast_arame_bc,
  mod_elast_arame_de,
  area_arame_bc,
  area_arame_de,
  comp_arame_bc,
  comp_arame_de,
  dist_pt_ac,
  dist_pt_ce
) => {
  let reacao_b =
    ((mod_elast_arame_bc * area_arame_bc) /
      (mod_elast_arame_de * area_arame_de)) *
    (comp_arame_de / comp_arame_bc) *
    (dist_pt_ac / (dist_pt_ac + dist_pt_ce)) *
    result_reacao_d;

  return parseFloat(reacao_b.toFixed(2));
};

export const calcReacaoA = (
  carga_p,
  carga_distribuida,
  dist_pt_ac,
  dist_pt_ce,
  dist_pt_ef,
  result_reacao_d,
  result_reacao_b
) => {
  let reacao_a =
    carga_distribuida * (dist_pt_ac + 2 * dist_pt_ce + 2 * dist_pt_ef) +
    carga_p -
    result_reacao_b -
    result_reacao_d;

  return parseFloat(reacao_a.toFixed(2));
};

export const calcLmtEscArameBC = (result_reacao_b, area_arame_bc) => {
  let limite_esc_arame_bc =
    (result_reacao_b / (area_arame_bc * Math.pow(10, -6))) * Math.pow(10, -3);

  //Fazer verificação: limite_esc_arame_bc tem que ser menor que o limite de escoamento do arame que foi inserido pelo usuário

  return parseFloat(limite_esc_arame_bc.toFixed(2));
};

export const calcLmtEscArameDE = (result_reacao_d, area_arame_de) => {
  let limite_esc_arame_de =
    (result_reacao_d / (area_arame_de * Math.pow(10, -6))) * Math.pow(10, -3);

  //Fazer verificação: limite_esc_arame_de tem que ser menor que o limite de escoamento do arame que foi inserido pelo usuário

  return parseFloat(limite_esc_arame_de.toFixed(2));
};

export const calcDeslocPtC = (
  result_reacao_b,
  comp_arame_bc,
  mod_elast_arame_bc,
  area_arame_bc
) => {
  let desloc_pt_c =
    (result_reacao_b * comp_arame_bc) / (mod_elast_arame_bc * area_arame_bc);

  return parseFloat(desloc_pt_c.toFixed(6));
};

export const calcDeslocPtE = (
  result_reacao_d,
  comp_arame_de,
  mod_elast_arame_de,
  area_arame_de
) => {
  let desloc_pt_e =
    (result_reacao_d * comp_arame_de) / (mod_elast_arame_de * area_arame_de);

  return parseFloat(desloc_pt_e.toFixed(6));
};

export const calcDeslocPtF = (
  result_desloc_pt_c,
  dist_pt_ac,
  dist_pt_ce,
  dist_pt_ef
) => {
  let desloc_pt_f =
    (result_desloc_pt_c / dist_pt_ac) * (dist_pt_ac + dist_pt_ce + dist_pt_ef);

  return parseFloat(desloc_pt_f.toFixed(6));
};

export const calcDeformArameBC = (result_desloc_pt_c, comp_arame_bc) => {
  let deform_arame_bc = result_desloc_pt_c / comp_arame_bc;

  return parseFloat(deform_arame_bc.toFixed(6));
};

export const calcDeformArameDE = (result_desloc_pt_e, comp_arame_de) => {
  let deform_arame_de = result_desloc_pt_e / comp_arame_de;

  return parseFloat(deform_arame_de.toFixed(6));
};
