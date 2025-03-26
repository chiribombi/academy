interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  acceptance: boolean;
}

export const submitForm = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    // You can replace this with your actual API endpoint
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        access_key: '1be0878c-dee1-4ec6-9962-24f4b3814c5f'
      })
    });

    const result = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: 'Formulario enviado correctamente'
      };
    } else {
      throw new Error(result.message || 'Error al enviar el formulario');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Error al enviar el formulario. Por favor, inténtalo de nuevo.'
    };
  }
}
