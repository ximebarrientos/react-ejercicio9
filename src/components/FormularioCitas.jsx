import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import GrillaCitas from "./GrillaCitas";

const FormularioCitas = () => {
  const [citas, setCitas] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const crearCita = (datos) => {
    setCitas([...citas, datos]);
    reset();
  };

  return (
    <section>
      <Form
        onSubmit={handleSubmit(crearCita)}
        className="border p-3 rounded-3 bg-light"
      >
        <Form.Group className="mb-3" controlId="mascota">
          <Form.Label>Nombre de mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Firulais"
            {...register("mascota", {
              required: "El nombre de la mascota es obligatorio",
              minLength: {
                value: 3,
                message:
                  "El nombre de la mascota debe tener como minimo 3 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "El nombre de la mascota debe tener como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.mascota?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="duenio">
          <Form.Label>Nombre de dueño</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Juan Perez"
            {...register("duenio", {
              required: "El nombre de la dueño es obligatorio",
              minLength: {
                value: 3,
                message:
                  "El nombre de la dueño debe tener como minimo 3 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "El nombre de la dueño debe tener como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.duenio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="fecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="12/06/2025"
            {...register("fecha", {
              required: "La fecha es obligatoria",
            })}
          />
          <Form.Text className="text-danger">{errors.fecha?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="hora">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="time"
            placeholder="01:00 am"
            {...register("hora", {
              required: "La hora es obligatoria",
            })}
          />
          <Form.Text className="text-danger">{errors.hora?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="sintomas">
          <Form.Label>Sintomas</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="Ingrese los sintomas"
            {...register("sintomas", {
              required: "Los sintomas son un dato obligatorio",
              minLength: {
                value: 10,
                message: "Los sintomas deben tener como minimo 10 caracteres",
              },
              maxLength: {
                value: 300,
                message: "Los sintomas deben tener como maximo 300 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.sintomas?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar nueva cita
        </Button>
      </Form>
      <GrillaCitas citas={citas}></GrillaCitas>
    </section>
  );
};

export default FormularioCitas;
