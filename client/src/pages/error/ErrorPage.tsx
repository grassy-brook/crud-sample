import { FC, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';


type ErrorMessage = {
  title: string;
  body: string;
}

const ERROR_MESSAGES: Record<string, ErrorMessage> = {
  default: {
    title: 'エラーが発生しました',
    body: '予期せぬエラーが発生しました。\nホームへ戻り再度お試し下さい。'
  },
  concurrent: {
    title: '更新エラー',
    body: '他のユーザにて編集された為、更新できませんでした。\nホームへ戻り再度お試し下さい。'
  }
};

const MultiLineBody: FC<{ body: string }> = ({ body }) => {
  const texts = body.split('\n').map((item, index) => (
    <span key={index}>
      {item}
      <br />
    </span>
  ));
  return <div>{texts}</div>;
};

const ErrorPage: FC = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const mode = query.get('mode');
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(ERROR_MESSAGES.default);

  useEffect(() => {
    if (mode === '2') {
      setErrorMessage(ERROR_MESSAGES.concurrent);
    }
  }, [mode]);

  return (
    <Box 
      className="error-container"
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)', // ヘッダーの高さを考慮
        padding: 3
      }}
    >
      <Box 
        className="error-content"
        sx={{
          textAlign: 'center',
          maxWidth: 'sm',
          width: '100%'
        }}
      >
        <h1 className="error-title text-2xl font-bold mb-4">
          {errorMessage.title}
        </h1>
        <Box className="error-message mb-8">
          <MultiLineBody body={errorMessage.body} />
        </Box>
        <Box className="error-action">
          <ButtonMenu 
            label="ホームへ戻る" 
            width={200} 
            action={() => navigate('/')} 
          />
        </Box>
      </Box>
    </Box>
  )
};

export default ErrorPage;
