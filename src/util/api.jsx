import { useEffect, useState } from 'react';
//real : http://lazyme.s3-website.ap-northeast-2.amazonaws.com/
// dev : http://localhost:3000/
const BASE_URL = 'http://lazyme.s3-website.ap-northeast-2.amazonaws.com/';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //실수로 시작되거나 더 이상 필요 없는 비동기 작업에 대해 중단할 방법을 제공
    //fetch도 비동기 요청이기 때문에, 이 비동기 작업의 중단을 위해 사용
    const abortCont = new AbortController();

    setTimeout(() => {
      //요청과 통신하거나 중단하는 데에 사용하는 신호 역할
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);

    // abort the fetch. 완료되기 전에 DOM 요청 중단
    return () => abortCont.abort();
  }, [url]);

  return [data, isPending, error];
};

export const fetchCreate = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error('Error', error);
    });
};

export const fetchDelete = (url, id) => {
  fetch(`${url}${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error('Error', error);
    });
};

export const fetchPatch = (url, id, data) => {
  fetch(`${url}${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(data),
  })
    .then(() => {
      // window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error('Error', error);
    });
};
