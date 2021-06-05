import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Step1, Step2, Step3, Step4, Title } from "../../components";
import { Container, FlexContainer } from "./styles";
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
import { useWindowSize } from "../../hooks";
import "react-toastify/dist/ReactToastify.css";

import { useFormik } from "formik";
import { CircularProgress, Button, Grid } from "@material-ui/core";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import DownloadDocument from "../../components/PdfDocument";

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

  const [isLoading, setIsLoading] = useState(false);
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
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (step === 1) setDisableButton(false);
  }, [step]);

  const data = {
    reactionA,
    reactionB,
    reactionD,
    calculatedLimitEscBc,
    calculatedLimitEscDe,
    displacementPointA,
    displacementPointc,
    displacementPointE,
    displacementPointF,
    deformationBC,
    deformationDE,
  };

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

    if (step === 1) {
      setIsLoading(true);
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

      if (lim_esc_bc < calcLimitEscBc || lim_esc_de < calcLimitEscDe) {
        setDisableButton(true);
      }

      setTimeout(() => {
        setIsLoading(false);
        setStep((prev) => prev + 1);
      }, 500);
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

      setStep((prev) => prev + 1);
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
    2: "Tensões e reações",
    3: "Deslocamentos",
    4: "Deformações",
  };

  const size = useWindowSize();

  return (
    <Container size={size} isLoading={isLoading}>
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

        {size > 1240 && (
          <Grid id="content" item xs={6}>
            <Title
              currentStep={step}
              totalSteps={4}
              message={stepTitles[step]}
            />
            <FlexContainer>
              <Image
                src="/images/structure_base.png"
                alt="Estrutura Base"
                width={500}
                height={300}
              />
            </FlexContainer>
          </Grid>
        )}

        <Grid id="content" item xs={size > 1240 ? 6 : 12}>
          {size <= 1240 && (
            <Grid id="mobile-content" item xs={12}>
              <Title
                currentStep={step}
                totalSteps={4}
                message={stepTitles[step]}
              />
              <FlexContainer>
                <Image
                  src="/images/structure_base.png"
                  alt="Estrutura Base"
                  width={500}
                  height={300}
                />
              </FlexContainer>
            </Grid>
          )}
          <form>
            {isLoading && <CircularProgress id="loading" />}
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
                  limEscBC={formik.values.lim_esc_bc}
                  limEscDE={formik.values.lim_esc_de}
                  calcLimitEscBC={calculatedLimitEscBc}
                  calcLimitEscDE={calculatedLimitEscDe}
                  reactionA={reactionA}
                  reactionB={reactionB}
                  reactionD={reactionD}
                  disableButton={disableButton}
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
              <Grid item xs={size < 420 ? 12 : 6}>
                {step > 1 && (
                  <Button
                    fullWidth={size < 420 ? true : false}
                    onClick={() => setStep((prev) => prev - 1)}
                    variant="outlined"
                    type="button"
                  >
                    Anterior
                  </Button>
                )}
              </Grid>
              <Grid item xs={size < 420 ? 12 : 6}>
                {step < 4 ? (
                  <Button
                    fullWidth={size < 420 ? true : false}
                    disabled={disableButton}
                    onClick={formik.handleSubmit}
                    variant="outlined"
                    type="button"
                  >
                    Próximo
                  </Button>
                ) : (
                  <Button
                    fullWidth={size < 420 ? true : false}
                    onClick={() =>
                      toast("Relatório gerado com sucesso!", {
                        type: "success",
                        autoClose: true,
                      })
                    }
                    variant="outlined"
                    type="button"
                  >
                    <DownloadDocument data={data} />
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
