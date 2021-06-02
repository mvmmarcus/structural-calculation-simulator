import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Input } from "../../components";

export default function Step2({
  limEscBC,
  limEscDE,
  calcLimitEscBC,
  calcLimitEscDE,
  reactionA,
  reactionB,
  reactionD,
}) {
  useEffect(() => {
    if (window) window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (limEscBC < calcLimitEscBC) {
      toast(
        "O arame BC atingiu o limite de escoamento do material. Volte uma etapa e redimensione o projeto!",
        {
          type: "error",
          autoClose: false,
        }
      );
    }

    if (limEscDE < calcLimitEscDE) {
      toast(
        "O arame DE atingiu o limite de escoamento do material. Volte uma etapa e redimensione o projeto!",
        {
          type: "error",
          autoClose: false,
        }
      );
    }
  }, []);

  return (
    <>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <h2>Resultados</h2>
      </Grid>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <strong>Limites de escoamento</strong>
      </Grid>

      <Grid item xs={6}>
        <Input
          allowNegative
          type="number"
          label="Arame BC"
          unit="MPa"
          value={calcLimitEscBC}
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          allowNegative
          value={calcLimitEscDE}
          type="number"
          label="Arame DE"
          unit="MPa"
          disabled
        />
      </Grid>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <strong>Reações</strong>
      </Grid>
      <Grid item xs={6}>
        <Input
          allowNegative
          type="number"
          label="A"
          unit="KN"
          value={reactionA}
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          allowNegative
          value={reactionB}
          type="number"
          label="B"
          unit="KN"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          allowNegative
          value={reactionD}
          type="number"
          label="D"
          unit="KN"
          disabled
        />
      </Grid>
    </>
  );
}
