import { Grid, Fade } from "@material-ui/core";
import { useEffect } from "react";
import { Input } from "../../components";
import { useWindowSize } from "../../hooks";

export default function Step3({
  deslocPointA,
  deslocPointC,
  deslocPointE,
  deslocPointF,
}) {
  const size = useWindowSize();

  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Fade in timeout={500}>
      <Grid container spacing={5}>
        <Grid style={{ textAlign: "center" }} item xs={12}>
          <h2>Resultados</h2>
        </Grid>

        {size > 640 ? (
          <>
            <Grid style={{ textAlign: "center" }} item xs={12}>
              <strong>Deslocamentos</strong>
            </Grid>
            <Grid item xs={6}>
              <Input
                allowNegative
                type="number"
                label="Ponto A"
                unit="m"
                value={deslocPointA}
                disabled
                scale={6}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                allowNegative
                value={deslocPointC}
                type="number"
                label="Ponto C"
                unit="m"
                disabled
                scale={6}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                allowNegative
                type="number"
                label="Ponto E"
                unit="m"
                value={deslocPointE}
                disabled
                scale={6}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                allowNegative
                value={deslocPointF}
                type="number"
                label="Ponto F"
                unit="m"
                disabled
                scale={6}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid style={{ textAlign: "center" }} item xs={12}>
              <strong>Deslocamentos</strong>
            </Grid>
            <Grid item xs={12}>
              <Input
                allowNegative
                type="number"
                label="Ponto A"
                unit="m"
                value={deslocPointA}
                disabled
                scale={6}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                allowNegative
                value={deslocPointC}
                type="number"
                label="Ponto C"
                unit="m"
                disabled
                scale={6}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                allowNegative
                type="number"
                label="Ponto E"
                unit="m"
                value={deslocPointE}
                disabled
                scale={6}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                allowNegative
                value={deslocPointF}
                type="number"
                label="Ponto F"
                unit="m"
                disabled
                scale={6}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Fade>
  );
}
