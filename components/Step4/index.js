import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { Input } from "../../components";

export default function Step4({ deformBC, deformDE }) {
  useEffect(() => {
    if (window) window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <h2>Resultados</h2>
      </Grid>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <strong>Deformações</strong>
      </Grid>
      <Grid style={{ textAlign: "center", padding: "5px" }} item xs={6}>
        <strong>Arame BC</strong>
      </Grid>
      <Grid style={{ textAlign: "center", padding: "5px" }} item xs={6}>
        <strong>Arame DE</strong>
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
  );
}
