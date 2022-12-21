export const host = `${process.env.REACT_APP_REST_SCHEME}://${process.env.REACT_APP_REST_HOST}${process.env.REACT_APP_SERVER_ENDPOINT_PREFIX}`;

export const findBuildingLayout = async (buildingId) => {
    const response = await fetch(`${host}/buildings/layout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "buildingId": buildingId
      })
    });
    const status = response.status;
    switch (status) {
      case 200:
        const layout = await response.json();
        console.log(layout);
        return layout;
      default:
        return {};
    }
  };