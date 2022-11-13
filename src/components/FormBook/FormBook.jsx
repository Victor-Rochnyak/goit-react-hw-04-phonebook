import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// Стилі
import { Form, Label, Input, Button } from './FormBok.styled';

export default function FormBook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  // Сабміт на кнопку та ресет
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);

    reset();
  };
  
  const reset = () => {
    setName('');
    setNumber('');
  };

  // Генератор ID
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name:
        <Input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number:
        <Input
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}

// class FormBook extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   // Генератор ID
//   nameInputId = nanoid();
//   numberInputId = nanoid();
//   //Інпут

//
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label htmlFor={this.nameInputId}>
//            Name:
//           <Input
//             id={this.nameInputId}
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             required
//           />
//         </Label>
//         <Label htmlFor={this.numberInputId}>
//            Number:
//           <Input
//             id={this.numberInputId}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>
//         <Button type="submit">Add Contact</Button>
//       </Form>
//     );
//   }
// }
// export default FormBook;

FormBook.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
