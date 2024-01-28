'''
Author: Richard yuetingpei888@gmail.com
Date: 2024-01-26 00:17:40
LastEditors: Richard yuetingpei888@gmail.com
LastEditTime: 2024-01-26 00:18:06
FilePath: \webPages\basic\09-Data-Structures-Operators\starter\optimal.py
Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
'''
from scipy.optimize import linprog

# Coefficients of the objective function to be minimized
c = [-8, -8, -9]  # Negate coefficients because linprog minimizes by default

# Coefficients matrix for inequality constraints (Ax <= b)
A = [
    [1, 1, 1],   # Raw Material Availability
    [1, 0, 0],   # Processing Capacity - Centre 1
    [0, 1, 0],   # Processing Capacity - Centre 2
    [0.5, 0.5, 0],  # Processing Capacity - Centre 3
    [-1, 0, 0],  # Sales Constraint - Product A
    [0, -1, 0],  # Sales Constraint - Product B (contractual agreement)
]

# Right-hand side values for inequality constraints
b = [50000, 50000, 30000, 10000, -10000, -15000]

# Bounds for variables (x1, x2, x3)
x_bounds = [(0, None), (0, None), (0, None)]

# Solve the linear programming problem
result = linprog(c, A_ub=A, b_ub=b, bounds=x_bounds, method='highs')

# Print the optimal solution
print("Optimal Solution:")
print("Product A (x1): {:.2f}".format(result.x[0]))
print("Product B (x2): {:.2f}".format(result.x[1]))
print("Product C (x3): {:.2f}".format(result.x[2]))
# Negate the result to get the actual maximum value
print("Optimal Contribution (Z): {:.2f}".format(-result.fun))
