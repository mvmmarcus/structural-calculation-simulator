/*

O objetivo do programa computacional é: 

    i) Verificar se os arames ultrapassam o limite de escoamento do aço, caso isso 
    ocorra o programa deverá avisar ao usuário que um ou os dois arames atingiram 
    esse limite; 
    ii) Informar as deformações dos arames; 
    iii) Informar os deslocamentos dos pontos A, C, E e F;
    iv) Informar as reações de apoio nos pontos A, B e D;
  
###################################################################################################    

Os dados que o usuário poderá entrar no programa são: 

    i) Valor da carga distribuída w; 
    ii) Limite de escoamento dos arames; 
    iii) Módulo de elasticidade dos arames; 
    iv) Distância entre os pontos AC, CE, EF; 
    v) Os comprimentos dos arrames de BC e DE, sendo que eles podem ter comprimentos diferentes;

*/

const app = () => {
  let = carga_p = 100; //[ N ]
  let = carga_distribuida = 10; //[ KN/m ]
  let = mod_elast_arame_bc = 2000; //[ GPa ]
  let = mod_elast_arame_de = 2000; //[ GPa ]
  let = area_arame_bc = 600; //[ mm² ]
  let = area_arame_de = 600; //[ mm²]
  let = comp_arame_bc = 1; //[ m ]
  let = comp_arame_de = 2; //[ m ]
  let = dist_pt_ac = 3; //[ m ]
  let = dist_pt_ce = 4; //[ m ]
  let = dist_pt_ef = 5; //[ m ]
  let = limite_escoa_arame_bc = 250; //[ MPa ]
  let = limite_escoa_arame_de = 250; //[ MPa ]

  console.log("Peso: " + carga_p + " KN\n");
  console.log("Carga distribuída: " + carga_distribuida + " KN/m\n");
  console.log(
    "Módulo de elasticidade arame BC: " + mod_elast_arame_bc + " GPa\n"
  );
  console.log(
    "Módulo de elasticidade arame DE: " + mod_elast_arame_de + " GPa\n"
  );
  console.log("Área transversal do arame - BC: " + area_arame_bc + " mm²\n");
  console.log("Área transversal do arame - DE: " + area_arame_de + " mm²\n");
  console.log("Comprimento do arame - BC: " + comp_arame_bc + " m\n");
  console.log("Comprimento do arame - DE: " + comp_arame_de + " m\n");
  console.log("Distância entre os pontos - AC: " + dist_pt_ac + " m\n");
  console.log("Distância entre os pontos - CE: " + dist_pt_ce + " m\n");
  console.log("Distância entre os pontos - EF: " + dist_pt_ef + " m\n");
  console.log(
    "Limite de escoamento do arame BC: " + limite_escoa_arame_bc + " MPa\n"
  );
  console.log(
    "Limite de escoamento do arame DE: " + limite_escoa_arame_de + " MPa\n"
  );

  /*
    
    ### iv) Informar as reações de apoio nos pontos A, B e D ###
    
    */

  console.log("\nItem iv): Informar as reações de apoio nos pontos A, B e D");

  //Calcular reação em D
  const calcReacaoD = (
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
  //
  console.log("\nReação em D: [KN]");
  let result_reacao_d = calcReacaoD(
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
  );
  console.log(result_reacao_d);

  //Calcular reação em B
  const calcReacaoB = (
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
  console.log("\nReação em B: [KN]");
  let result_reacao_b = calcReacaoB(
    mod_elast_arame_bc,
    mod_elast_arame_de,
    area_arame_bc,
    area_arame_de,
    comp_arame_bc,
    comp_arame_de,
    dist_pt_ac,
    dist_pt_ce,
    dist_pt_ef
  );
  console.log(result_reacao_b);

  //Calcular reação em A
  const calcReacaoA = (
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
  console.log("\nReação em A: [KN]");
  let result_reacao_a = calcReacaoA(
    carga_p,
    carga_distribuida,
    dist_pt_ac,
    dist_pt_ce,
    dist_pt_ef,
    result_reacao_d,
    result_reacao_b
  );
  console.log(result_reacao_a);

  /*
    
    ### i) Verificar se os arames ultrapassam o limite de escoamento do aço, caso isso ocorra o programa deverá avisar ao usuário que um ou os dois arames atingiram esse limite;  ###
    
    */

  console.log(
    "\nItem i): Verificar se os arames ultrapassam o limite de escoamento do aço"
  );

  //Calcular limite de escoamento Arame BC
  const calcLmtEscArameBC = (result_reacao_b, area_arame_bc) => {
    let limite_esc_arame_bc =
      (result_reacao_b / (area_arame_bc * Math.pow(10, -6))) * Math.pow(10, -3);

    //Fazer verificação: limite_esc_arame_bc tem que ser menor que o limite de escoamento do arame que foi inserido pelo usuário

    return parseFloat(limite_esc_arame_bc.toFixed(2));
  };
  console.log("\nLimite de escoamento Arame BC: [MPa]");
  let result_lmt_esc_arame_bc = calcLmtEscArameBC(
    result_reacao_b,
    area_arame_bc
  );
  console.log(result_lmt_esc_arame_bc);

  //Calcular limite de escoamento Arame DE
  const calcLmtEscArameDE = (result_reacao_d, area_arame_de) => {
    let limite_esc_arame_de =
      (result_reacao_d / (area_arame_de * Math.pow(10, -6))) * Math.pow(10, -3);

    //Fazer verificação: limite_esc_arame_de tem que ser menor que o limite de escoamento do arame que foi inserido pelo usuário

    return parseFloat(limite_esc_arame_de.toFixed(2));
  };
  console.log("\nLimite de escoamento Arame DE: [MPa]");
  let result_lmt_esc_arame_de = calcLmtEscArameDE(
    result_reacao_d,
    area_arame_de
  );
  console.log(result_lmt_esc_arame_de);

  /*
    
    ### iii) Informar os deslocamentos dos pontos A, C, E e F ###
    
    */

  console.log("\nItem iii): Informar os deslocamentos dos pontos A, C, E e F");

  //Calcular Descolamento do ponto A
  let result_desloc_pt_a = 0.0;

  console.log("\nDescolamento do ponto A: [m]");
  console.log(result_desloc_pt_a);

  //Calcular Deslocamento do ponto C
  const calcDeslocPtC = (
    result_reacao_b,
    comp_arame_bc,
    mod_elast_arame_bc,
    area_arame_bc
  ) => {
    let desloc_pt_c =
      (result_reacao_b * comp_arame_bc) / (mod_elast_arame_bc * area_arame_bc);

    return parseFloat(desloc_pt_c.toFixed(6));
  };
  console.log("\nDeslocamento do ponto C: [m]");
  let result_desloc_pt_c = calcDeslocPtC(
    result_reacao_b,
    comp_arame_bc,
    mod_elast_arame_bc,
    area_arame_bc
  );
  console.log(result_desloc_pt_c);

  //Calcular Deslocamento do ponto E
  const calcDeslocPtE = (
    result_reacao_d,
    comp_arame_de,
    mod_elast_arame_de,
    area_arame_de
  ) => {
    let desloc_pt_e =
      (result_reacao_d * comp_arame_de) / (mod_elast_arame_de * area_arame_de);

    return parseFloat(desloc_pt_e.toFixed(6));
  };
  console.log("\nDeslocamento do ponto E: [m]");
  let result_desloc_pt_e = calcDeslocPtE(
    result_reacao_d,
    comp_arame_de,
    mod_elast_arame_de,
    area_arame_de
  );
  console.log(result_desloc_pt_e);

  //Calcular Deslocamento do ponto F
  const calcDeslocPtF = (
    result_desloc_pt_c,
    dist_pt_ac,
    dist_pt_ce,
    dist_pt_ef
  ) => {
    let desloc_pt_f =
      (result_desloc_pt_c / dist_pt_ac) *
      (dist_pt_ac + dist_pt_ce + dist_pt_ef);

    return parseFloat(desloc_pt_f.toFixed(6));
  };
  console.log("\nDeslocamento do ponto F: [m]");
  let result_desloc_pt_f = calcDeslocPtF(
    result_desloc_pt_c,
    dist_pt_ac,
    dist_pt_ce,
    dist_pt_ef
  );
  console.log(result_desloc_pt_f);

  /*
    
    ### ii) Informar as deformações dos arames ###
    
    */

  console.log("\nItem ii): Informar as deformações dos arames");

  //Calcular Deformação no Arame BC
  const calcDeformArameBC = (result_desloc_pt_c, comp_arame_bc) => {
    let deform_arame_bc = result_desloc_pt_c / comp_arame_bc;

    return parseFloat(deform_arame_bc.toFixed(6));
  };
  console.log("\nDeformação no Arame BC: ");
  let result_deform_arame_bc = calcDeformArameBC(
    result_desloc_pt_c,
    comp_arame_bc
  );
  console.log(result_deform_arame_bc);

  //Calcular Deformação no Arame DE
  const calcDeformArameDE = (result_desloc_pt_e, comp_arame_de) => {
    let deform_arame_de = result_desloc_pt_e / comp_arame_de;

    return parseFloat(deform_arame_de.toFixed(6));
  };
  console.log("\nDeformação no Arame DE: ");
  let result_deform_arame_de = calcDeformArameDE(
    result_desloc_pt_e,
    comp_arame_de
  );
  console.log(result_deform_arame_de);
};

app();
