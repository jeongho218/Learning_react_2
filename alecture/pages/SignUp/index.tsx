import React, { useCallback, useState } from 'react';
import { Form, Label, Input, LinkContainer, Button, Header, Error } from './styles';
import useInput from '@hooks/useInput';

const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMisMatchError] = useState(false);
  // setPassword와 setPasswordCheck의 입력값이 다르면 이 값이 true가 된다.

  // 상단에서 커스텀 훅을 사용하여 onChangeEmail을 선언하였으므로 아래 내용은 삭제 가능하다.
  // const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // }, []);

  // 상단에서 커스텀 훅을 사용하여 onChangeNickname을 선언하였으므로 아래 내용은 삭제 가능하다.
  // const onChangeNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNickname(e.target.value);
  // }, []);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMisMatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setMisMatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log(email, nickname, password, passwordCheck);
      if (!mismatchError) {
        console.log('서버로 회원가입하기');
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {/* {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>} */}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        {/* <Link to="/login">로그인 하러가기</Link> */}
      </LinkContainer>
    </div>
  );
};

export default SignUp;
