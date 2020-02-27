import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function FormAddTweet(){

    const [formValue, setFormValue] = useState({
        name: '',
        tweet: ''
    })

    const onChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value,
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        const {name, tweet} = formValue;

        if(!name || !tweet) console.log('Todos los campos son obligatorios');
        else{
            console.log('Tweet enviado correctamente');
        } 
        
        
    }

    return (
        <Form className='m-3' onChange={onChange} onSubmit={onSubmit} >
            <Form.Group className='text-center' >
                <h1>Nuevo Tweet</h1>
            </Form.Group>
            <Form.Group >
                <Form.Control type='text' name='name' placeholder='Excribe tu nombre' />
            </Form.Group>
            <Form.Group >
                <Form.Control as='textarea' name='tweet' row='3' placeholder='Escribe lo que quieras opinar' />
            </Form.Group>
            <Button variant='primary' type='submit'>Enviar Tweet</Button>
        </Form>
    )
}