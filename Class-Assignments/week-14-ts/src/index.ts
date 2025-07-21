// Advanced TypeScript API's

// 1. Pick

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdatedUser = Pick<User, "name" | "age" | "password">;

function findUser(user: UpdatedUser) {}

// 2. Partial

type UserPropsPartial = Partial<Pick<User, "name" | "password">>;
type UserPropsPartial2 = Partial<UpdatedUser>;

function findUsers(user: UserPropsPartial) {}

// 3. Readonly

interface Employee {
  readonly id: number;
  name: string;
  readonly department: string;
}

const user: Employee = {
  id: 123,
  name: "suraj",
  department: "IT",
};

const user2: Readonly<Employee> = {
  id: 1234,
  name: "suraj",
  department: "IT",
};

user.name = "Suraj Kale"; // I can change this because it is not a readonly key
// but
// user.department = "abc"; // i cannot do this because department is readonly key

// 4. Record

type NewUserRecord = Record<string, Employee>;

const newUser = {
  abc: {
    id: 123,
  },
};
