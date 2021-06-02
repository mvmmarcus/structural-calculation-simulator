import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { Input } from "../../components";
import { useWindowSize } from "../../hooks";

export default function Step1({ formik, handleChange, values }) {
  const size = useWindowSize();

  useEffect(() => {
    if (window) window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {size > 640 ? (
        <>
          <Grid item xs={6}>
            <Input
              error={formik.touched.peso && formik.errors.peso}
              name="peso"
              type="number"
              label="Peso (P)"
              unit="KN"
              handleChange={handleChange}
              value={values.peso}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={
                formik.touched.carga_distribuida &&
                formik.errors.carga_distribuida
              }
              handleChange={handleChange}
              value={values.carga_distribuida}
              type="number"
              name="carga_distribuida"
              label="Carga Distribuída (w)"
              unit="KN/m"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={formik.touched.dist_ac && formik.errors.dist_ac}
              handleChange={handleChange}
              value={values.dist_ac}
              type="number"
              name="dist_ac"
              label="Distância entre os pontos AC"
              unit="m"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={formik.touched.dist_ce && formik.errors.dist_ce}
              handleChange={handleChange}
              value={values.dist_ce}
              type="number"
              name="dist_ce"
              label="Distância entre os pontos CE"
              unit="m"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={formik.touched.dist_ef && formik.errors.dist_ef}
              handleChange={handleChange}
              value={values.dist_ef}
              type="number"
              name="dist_ef"
              label="Distância entre os pontos EF"
              unit="m"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid style={{ textAlign: "center", padding: "5px" }} item xs={6}>
            <strong>Arame BC</strong>
          </Grid>
          <Grid style={{ textAlign: "center", padding: "5px" }} item xs={6}>
            <strong>Arame DE</strong>
          </Grid>
          <Grid item xs={6}>
            <Input
              error={
                formik.touched.comp_arame_bc && formik.errors.comp_arame_bc
              }
              handleChange={handleChange}
              value={values.comp_arame_bc}
              type="number"
              name="comp_arame_bc"
              label="Comprimento BC"
              unit="m"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={
                formik.touched.comp_arame_de && formik.errors.comp_arame_de
              }
              handleChange={handleChange}
              value={values.comp_arame_de}
              type="number"
              name="comp_arame_de"
              label="Comprimento DE"
              unit="m"
            />
          </Grid>

          <Grid item xs={6}>
            <Input
              error={formik.touched.area_bc && formik.errors.area_bc}
              handleChange={handleChange}
              value={values.area_bc}
              type="number"
              name="area_bc"
              label="Área transversal BC"
              unit="mm²"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={formik.touched.area_de && formik.errors.area_de}
              handleChange={handleChange}
              value={values.area_de}
              type="number"
              name="area_de"
              label="Área transversal DE"
              unit="mm²"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={formik.touched.lim_esc_bc && formik.errors.lim_esc_bc}
              name="lim_esc_bc"
              type="number"
              label="Limite de escoamento BC"
              unit="MPa"
              handleChange={handleChange}
              value={values.lim_esc_bc}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={formik.touched.lim_esc_de && formik.errors.lim_esc_de}
              handleChange={handleChange}
              value={values.lim_esc_de}
              type="number"
              name="lim_esc_de"
              label="Limite de escoamento DE"
              unit="MPa"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={formik.touched.modulo_bc && formik.errors.modulo_bc}
              handleChange={handleChange}
              value={values.modulo_bc}
              type="number"
              name="modulo_bc"
              label="Módulo de elasticidade BC"
              unit="GPa"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              error={formik.touched.modulo_de && formik.errors.modulo_de}
              handleChange={handleChange}
              value={values.modulo_de}
              type="number"
              name="modulo_de"
              label="Módulo de elasticidade DE"
              unit="GPa"
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <Input
              error={formik.touched.peso && formik.errors.peso}
              name="peso"
              type="number"
              label="Peso (P)"
              unit="KN"
              handleChange={handleChange}
              value={values.peso}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              error={
                formik.touched.carga_distribuida &&
                formik.errors.carga_distribuida
              }
              handleChange={handleChange}
              value={values.carga_distribuida}
              type="number"
              name="carga_distribuida"
              label="Carga Distribuída (w)"
              unit="KN/m"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              error={formik.touched.dist_ac && formik.errors.dist_ac}
              handleChange={handleChange}
              value={values.dist_ac}
              type="number"
              name="dist_ac"
              label="Distância entre os pontos AC"
              unit="m"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              error={formik.touched.dist_ce && formik.errors.dist_ce}
              handleChange={handleChange}
              value={values.dist_ce}
              type="number"
              name="dist_ce"
              label="Distância entre os pontos CE"
              unit="m"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              error={formik.touched.dist_ef && formik.errors.dist_ef}
              handleChange={handleChange}
              value={values.dist_ef}
              type="number"
              name="dist_ef"
              label="Distância entre os pontos EF"
              unit="m"
            />
          </Grid>
          <Grid style={{ textAlign: "center", padding: "5px" }} item xs={12}>
            <strong>Arame BC</strong>
          </Grid>
          <Grid item xs={12}>
            <Input
              error={
                formik.touched.comp_arame_bc && formik.errors.comp_arame_bc
              }
              handleChange={handleChange}
              value={values.comp_arame_bc}
              type="number"
              name="comp_arame_bc"
              label="Comprimento BC"
              unit="m"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              error={formik.touched.area_bc && formik.errors.area_bc}
              handleChange={handleChange}
              value={values.area_bc}
              type="number"
              name="area_bc"
              label="Área transversal BC"
              unit="mm²"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              error={formik.touched.lim_esc_bc && formik.errors.lim_esc_bc}
              name="lim_esc_bc"
              type="number"
              label="Limite de escoamento BC"
              unit="MPa"
              handleChange={handleChange}
              value={values.lim_esc_bc}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              error={formik.touched.modulo_bc && formik.errors.modulo_bc}
              handleChange={handleChange}
              value={values.modulo_bc}
              type="number"
              name="modulo_bc"
              label="Módulo de elasticidade BC"
              unit="GPa"
            />
          </Grid>

          <Grid style={{ textAlign: "center", padding: "5px" }} item xs={12}>
            <strong>Arame DE</strong>
          </Grid>

          <Grid item xs={12}>
            <Input
              error={
                formik.touched.comp_arame_de && formik.errors.comp_arame_de
              }
              handleChange={handleChange}
              value={values.comp_arame_de}
              type="number"
              name="comp_arame_de"
              label="Comprimento DE"
              unit="m"
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              error={formik.touched.area_de && formik.errors.area_de}
              handleChange={handleChange}
              value={values.area_de}
              type="number"
              name="area_de"
              label="Área transversal DE"
              unit="mm²"
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              error={formik.touched.lim_esc_de && formik.errors.lim_esc_de}
              handleChange={handleChange}
              value={values.lim_esc_de}
              type="number"
              name="lim_esc_de"
              label="Limite de escoamento DE"
              unit="MPa"
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              error={formik.touched.modulo_de && formik.errors.modulo_de}
              handleChange={handleChange}
              value={values.modulo_de}
              type="number"
              name="modulo_de"
              label="Módulo de elasticidade DE"
              unit="GPa"
            />
          </Grid>
        </>
      )}
    </>
  );
}
