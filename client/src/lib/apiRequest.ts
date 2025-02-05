// /src/lib/apiRequest.ts
export const apiRequest = async (method: string, url: string, data?: any) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,  // Если есть данные, отправляем их
  });

  if (!response.ok) {
    throw new Error('Failed to send request');  // Если ошибка в запросе, выбрасываем исключение
  }

  return response.json();  // Возвращаем ответ в формате JSON
};

