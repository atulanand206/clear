export const host = `${process.env.REACT_APP_REST_SCHEME}://${process.env.REACT_APP_REST_HOST}${process.env.REACT_APP_SERVER_ENDPOINT_PREFIX}`;

export const findMachines = async () => {
    const response = await fetch(`${host}/machines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const status = response.status;
    switch (status) {
      case 200:
        const machines = await response.json();
        console.log(machines);
        return machines;
      default:
        return {};
    }
  };