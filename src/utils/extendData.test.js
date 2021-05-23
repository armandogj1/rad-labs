import sampleData from '../sample_data/1234_Test_Street.json';
import extendData from './extendData';

describe('Test extendData', () => {
  it('should extend Level 4', () => {
    const level4 = sampleData.floors[3];
    expect(level4).not.toHaveProperty('node_count');

    extendData(level4, 1617840940000);
    expect(level4).toHaveProperty('node_count');
    console.log(level4);
  });
});
