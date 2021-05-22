import evaluateNode from './evaluateNode';

const retrieved_at = 1617840940000;

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

describe('Test evaluateNode', () => {
  testCases.forEach((node, idx) => {
    it(`should evaluate to ${responses[idx]}`, () => {
      const res = evaluateNode(node, retrieved_at);
      expect(res).toBe(responses[idx]);
    });
  });
});
