import { initializeTimes, updateTimes } from './Booking';
import { fetchAPI } from '../bookingsAPI';

jest.mock('../bookingsAPI', () => ({
  fetchAPI: jest.fn(),
}));

describe('Booking reducer functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('initializeTimes', () => {
    it('should return an array of available times for today', () => {
      const mockTimes = ['10:00', '11:00', '12:00'];
      fetchAPI.mockReturnValue(mockTimes);
      const result = initializeTimes();
      expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
      expect(result).toEqual(mockTimes);
    });
  });

  describe('updateTimes', () => {
    it('should return a new array of times based on the provided date', () => {
      const mockTimes = ['18:00', '19:00', '20:00'];
      fetchAPI.mockReturnValue(mockTimes);
      const action = { type: 'UPDATE_TIMES', payload: '2025-07-22' };
      const result = updateTimes([], action);
      expect(fetchAPI).toHaveBeenCalledWith(new Date('2025-07-22'));
      expect(result).toEqual(mockTimes);
    });

    it('should return the current state if action type is not UPDATE_TIMES', () => {
      const currentState = ['12:00'];
      const action = { type: 'OTHER_ACTION', payload: '2025-07-22' };
      const result = updateTimes(currentState, action);
      expect(fetchAPI).not.toHaveBeenCalled();
      expect(result).toEqual(currentState);
    });
  });
});
