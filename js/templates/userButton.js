export const createUserButton = (id, user, isActive) => `
  <button class="ripple${
    isActive ? ' active' : ''
  }" data-user-id="${id}">${user}</button>
`;

export const createUserCreateButton = () => `
  <button class="ripple user-create-button">+ 유저 생성</button>
`;

export const createUserDeleteButton = () => `
  <button class="ripple user-delete-button">유저 삭제</button>
`;
