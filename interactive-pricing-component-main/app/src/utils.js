export const getClosestPlan = (plans, target) =>
  plans.reduce((prev, curr) =>
    Math.abs(curr.price - target) < Math.abs(prev.price - target) ? curr : prev
  );
