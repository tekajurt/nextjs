import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Template from "./componens/template"
const BasicExample = () => {
  return (
    <Template>
        <Form className='w-50 m-auto text-light align-items-center'>
                <Form.Text>
                    Esta información no la compartiremos con nadie.
                </Form.Text>
            <Form.Group className='mb-3'>
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="name" placeholder='Nombre completo'></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Correo" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Edad</Form.Label>
                <Form.Control type="age" placeholder='Edad'></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Ingresar
            </Button>
        </Form>
        </Template>
  );
}

export default BasicExample;