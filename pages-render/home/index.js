import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Step1, Step2, Step3, Step4, Title } from "../../components";
import { Container, FlexContainer } from "./styles";

import { useFormik } from "formik";
import { Button, Grid } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import {
  calcDeformArameBC,
  calcDeformArameDE,
  calcDeslocPtC,
  calcDeslocPtE,
  calcDeslocPtF,
  calcLmtEscArameBC,
  calcLmtEscArameDE,
  calcReacaoA,
  calcReacaoB,
  calcReacaoD,
} from "../../helpers";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [values, setValues] = useState({
    carga_distribuida: "",
    peso: "",
    comp_arame_bc: "",
    comp_arame_de: "",
    dist_ac: "",
    dist_ce: "",
    dist_ef: "",
    area_bc: "",
    area_de: "",
    modulo_bc: "",
    modulo_de: "",
    lim_esc_bc: "",
    lim_esc_de: "",
  });

  const [step, setStep] = useState(1);
  const [reactionA, setReactionA] = useState(null);
  const [reactionB, setReactionB] = useState(null);
  const [reactionD, setReactionD] = useState(null);
  const [calculatedLimitEscBc, setCalculatedLimitEscBc] = useState(null);
  const [calculatedLimitEscDe, setCalculatedLimitEscDe] = useState(null);
  const [displacementPointA, setDisplacementPointA] = useState(null);
  const [displacementPointc, setDisplacementPointc] = useState(null);
  const [displacementPointE, setDisplacementPointE] = useState(null);
  const [displacementPointF, setDisplacementPointF] = useState(null);
  const [deformationBC, setDeformationBC] = useState(null);
  const [deformationDE, setDeformationDE] = useState(null);

  const handleSubmit = (values) => {
    const {
      carga_distribuida,
      peso,
      dist_ac,
      dist_ce,
      dist_ef,
      area_bc,
      area_de,
      modulo_bc,
      modulo_de,
      lim_esc_bc,
      lim_esc_de,
      comp_arame_bc,
      comp_arame_de,
    } = values;
    console.log({ values });

    if (step === 1) {
      const reacao_d = calcReacaoD(
        peso,
        carga_distribuida,
        modulo_bc,
        modulo_de,
        area_bc,
        area_de,
        comp_arame_bc,
        comp_arame_de,
        dist_ac,
        dist_ce,
        dist_ef
      );

      setReactionD(reacao_d);

      const reacao_b = calcReacaoB(
        reacao_d,
        modulo_bc,
        modulo_de,
        area_bc,
        area_de,
        comp_arame_bc,
        comp_arame_de,
        dist_ac,
        dist_ce
      );

      setReactionB(reacao_b);

      const reacao_a = calcReacaoA(
        peso,
        carga_distribuida,
        dist_ac,
        dist_ce,
        dist_ef,
        reacao_d,
        reacao_b
      );

      setReactionA(reacao_a);

      const calcLimitEscBc = calcLmtEscArameBC(reacao_b, area_bc);

      setCalculatedLimitEscBc(calcLimitEscBc);

      const calcLimitEscDe = calcLmtEscArameDE(reacao_d, area_de);

      setCalculatedLimitEscDe(calcLimitEscDe);

      setStep((prev) => prev + 1);
    } else if (step === 2) {
      const calculateDeslocPtA = 0;
      setDisplacementPointA(calculateDeslocPtA);

      const calculateDeslocPtC = calcDeslocPtC(
        reactionB,
        comp_arame_bc,
        modulo_bc,
        area_bc
      );
      setDisplacementPointc(calculateDeslocPtC);

      const calculateDeslocPtE = calcDeslocPtE(
        reactionD,
        comp_arame_de,
        modulo_de,
        area_de
      );
      setDisplacementPointE(calculateDeslocPtE);

      const calculateDeslocPtF = calcDeslocPtF(
        calculateDeslocPtC,
        dist_ac,
        dist_ce,
        dist_ef
      );
      setDisplacementPointF(calculateDeslocPtF);

      if (lim_esc_bc < calculatedLimitEscBc)
        toast("O arame BC atingiu o limite de escoamento do material (aço)", {
          type: "error",
          autoClose: false,
        });
      if (lim_esc_de < calculatedLimitEscDe)
        toast("O arame DE atingiu o limite de escoamento do material (aço)", {
          type: "error",
          autoClose: false,
        });
      else {
        setStep((prev) => prev + 1);
      }
    } else if (step === 3) {
      const deformBC = calcDeformArameBC(displacementPointc, comp_arame_bc);
      setDeformationBC(deformBC);

      const deformDE = calcDeformArameDE(displacementPointE, comp_arame_de);
      setDeformationDE(deformDE);

      setStep((prev) => prev + 1);
    } else if (step === 4) {
      console.log("gerar pdf");
    }
  };

  const validationSchema = Yup.object({
    carga_distribuida: Yup.number().required("Campo obrigatório"),
    peso: Yup.number().required("Campo obrigatório"),
    comp_arame_bc: Yup.number().required("Campo obrigatório"),
    comp_arame_de: Yup.number().required("Campo obrigatório"),
    dist_ac: Yup.number().required("Campo obrigatório"),
    dist_ce: Yup.number().required("Campo obrigatório"),
    dist_ef: Yup.number().required("Campo obrigatório"),
    area_bc: Yup.number().required("Campo obrigatório"),
    area_de: Yup.number().required("Campo obrigatório"),
    modulo_bc: Yup.number().required("Campo obrigatório"),
    modulo_de: Yup.number().required("Campo obrigatório"),
    lim_esc_bc: Yup.number().required("Campo obrigatório"),
    lim_esc_de: Yup.number().required("Campo obrigatório"),
  });

  const initialvalues = {
    carga_distribuida: "",
    peso: "",
    comp_arame_bc: "",
    comp_arame_de: "",
    dist_ac: "",
    dist_ce: "",
    dist_ef: "",
    area_bc: "",
    area_de: "",
    modulo_bc: "",
    modulo_de: "",
    lim_esc_bc: "",
    lim_esc_de: "",
  };

  const formik = useFormik({
    onSubmit: handleSubmit,
    initialValues: initialvalues,
    validationSchema: validationSchema,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    const floatedValue =
      event.target.floatValue !== undefined ? event.target.floatValue : "";

    formik.setFieldValue(event.target.name, floatedValue);
  };

  const stepTitles = {
    1: "Reações de apoio",
    2: "Limites de escoamento",
    3: "Deslocamentos",
    4: "Deformações",
  };

  return (
    <Container>
      <ToastContainer />
      <Grid container spacing={10}>
        <Head>
          <title>Simulador de cálculo estrutural</title>
          <meta
            name="Simulador de cálculo estrutural"
            content="Simulador de cálculo estrutural"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid id="content" item xs={6}>
          <Title currentStep={step} totalSteps={4} message={stepTitles[step]} />
          <FlexContainer>
            <Image
              src="/images/structure_base.png"
              alt="Estrutura Base"
              width={500}
              height={300}
            />
          </FlexContainer>
        </Grid>

        <Grid id="content" item xs={6}>
          <form>
            <Grid className="input_group" container spacing={5}>
              {step === 1 && (
                <Step1
                  formik={formik}
                  handleChange={handleChange}
                  values={values}
                />
              )}
              {step === 2 && (
                <Step2
                  calcLimitEscBC={calculatedLimitEscBc}
                  calcLimitEscDE={calculatedLimitEscDe}
                  reactionA={reactionA}
                  reactionB={reactionB}
                  reactionD={reactionD}
                  formik={formik}
                  handleChange={handleChange}
                  values={values}
                />
              )}
              {step === 3 && (
                <Step3
                  deslocPointA={displacementPointA}
                  deslocPointC={displacementPointc}
                  deslocPointE={displacementPointE}
                  deslocPointF={displacementPointF}
                />
              )}
              {step === 4 && (
                <Step4 deformBC={deformationBC} deformDE={deformationDE} />
              )}
            </Grid>
            <Grid className="button_group" container>
              <Grid item xs={6}>
                {step > 1 && (
                  <Button
                    onClick={() => setStep((prev) => prev - 1)}
                    variant="outlined"
                    type="button"
                  >
                    Anterior
                  </Button>
                )}
              </Grid>
              <Grid item xs={6}>
                {step < 4 ? (
                  <Button
                    onClick={formik.handleSubmit}
                    variant="outlined"
                    type="button"
                  >
                    Próximo
                  </Button>
                ) : (
                  <Button
                    onClick={formik.handleSubmit}
                    variant="outlined"
                    type="button"
                  >
                    Finalizar
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
