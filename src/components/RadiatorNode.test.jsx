import { render, screen } from '@testing-library/react';
import RadiatorNode from './RadiatorNode';

const testCases = [
  {},
  {
    last_message: 1617840801000,
    lora_euid: '64D780CA29069144',
    radiator_temperature: 70,
    room_temperature: 62,
  },
  {
    last_message: 1617376227000,
    lora_euid: '0456D06E0855C3A1',
    radiator_temperature: 212,
    room_temperature: 72,
  },
  {
    last_message: 1617840706000,
    lora_euid: '306B8EB3ABBFBB20',
    radiator_temperature: 216,
    room_temperature: 72,
  },
];

const responses = ['INVALID_NODE', 'NO_STEAM', 'NODE_OFFLINE', 'VALID_NODE'];

describe('Test RadiatorNode Component', () => {
  testCases.forEach((nodeProps, idx) => {
    it(`Should output proper Element for ${responses[idx]}`, () => {
      render(<RadiatorNode {...nodeProps} />);

      const node = screen.getByTestId('radiator-node');
      // console.log(node);
      expect(node).toBeInTheDocument();
      expect(node.className).toBe(responses[idx]);

      if (responses[idx] === 'INVALID_NODE') {
        console.log(screen.getByText('INVALID NODE'));
        expect(screen.getByText('INVALID NODE')).toBeTruthy();
      } else {
        expect(screen.getByRole('heading')).toBeTruthy();
      }
    });
  });
});
