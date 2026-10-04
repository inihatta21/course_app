import authService from "../service/auth-service.js";

async function registerUser(req, res, next) {
  try {
    const resultData = await authService.userRegister(req.body);

    res.status(200).json({
      message: `register success! ${resultData.send_kode}`,
      id_user_validate: resultData.id_user_validate,
    });
  } catch (error) {
    next(error);
  }
}

async function kodeOtpUser(req, res, next) {
  try {
    const resultData = await authService.kodeOtpUser(req.body);

    res.status(200).json({
      message: resultData.message,
      user: resultData.user,
    });
  } catch (error) {
    next(error);
  }
}

async function loginUser(req, res, next) {
  try {
    const resultData = await authService.loginUser(req.body)

    res.status(200).json({
      accessToken: resultData.access_token,
      refreshToken: resultData.refresh_token,
      message: "login success"
    })
  } catch (error) {
    next(error)
  }
}

async function logout(req, res, next) {
  try {
    const resultData = await authService.logout(req.body)

    res.status(200).json({
      message: resultData
    })
  } catch (error) {
    next(error)
  }
}

async function updateKode(req, res, next) {
  try {
    const resultData = await authService.updateKode(req.body);

    res.status(200).json({
      message: resultData,
    });
  } catch (error) {
    next(error)
  }
}

async function updateAccessToken(req, res, next) {
  try {
    const resultData = await authService.updateAccessToken(req.body)

    res.status(200).json({
      accessToken: resultData
    })
  } catch (error) {
    next(error)
  }
}

export default {
  registerUser,
  kodeOtpUser,
  loginUser,
  updateKode,
  logout,
  updateAccessToken
};
