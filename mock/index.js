module.exports = {
  'GET /api/profile': {
    status: 'SUCCESS',
    data: {
      name: '管理员',
      department: '',
      avatar: 'yisheng.png',
      userid: 10001,
    },
  },

  'POST /api/login': (req, res) => {
    const { password, username } = req.body;
    const responseData = {
      status: '',
      authority: 'guest',
    };
    if (username === 'admin' && password === 'admin') {
      responseData.status = 'SUCCESS';
      responseData.authority = 'admin';
    } else if (username === 'user' && password === 'user') {
      responseData.status = 'SUCCESS';
      responseData.authority = 'user';
    } else {
      responseData.status = 'FAIL';
      responseData.authority = 'guest';
      responseData.message = '用户名或者密码错误';
    }
    res.cookie('authority', responseData.authority);
    res.send(responseData);
  },

  'POST /api/register': (req, res) => {
    res.cookie('authority', 'user');
    res.send({
      status: 'SUCCESS',
    });
  },

  'POST /api/logout': (req, res) => {
    res.cookie('authority', '');
    res.send({
      status: 'SUCCESS',
    });
  },
};
