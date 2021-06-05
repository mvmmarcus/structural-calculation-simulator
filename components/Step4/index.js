import { Grid, Fade } from "@material-ui/core";
import { useEffect } from "react";
import { Input } from "../../components";
import { useWindowSize } from "../../hooks";

export default function Step4({ deformBC, deformDE }) {
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
              <strong>Deformações</strong>
            </Grid>

            <Grid item xs={6}>
              <Input
                allowNegative
                type="number"
                label="Deformação BC"
                unit=""
                value={deformBC}
                disabled
                scale={6}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                allowNegative
                value={deformDE}
                type="number"
                label="Deformação DE"
                unit=""
                disabled
                scale={6}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid style={{ textAlign: "center" }} item xs={12}>
              <strong>Deformações</strong>
            </Grid>

            <Grid item xs={12}>
              <Input
                allowNegative
                type="number"
                label="Deformação BC"
                unit=""
                value={deformBC}
                disabled
                scale={6}
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                allowNegative
                value={deformDE}
                type="number"
                label="Deformação DE"
                unit=""
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
