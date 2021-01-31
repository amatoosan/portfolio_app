#本番環境構築後に編集

if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_auth-app-api', domain: 'フロントエンドのドメイン'
else
  Rails.application.config.session_store :cookie_store, key: '_auth-app-api'
end
