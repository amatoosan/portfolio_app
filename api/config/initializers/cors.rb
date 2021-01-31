Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      #Cookie保持を許可
      credentials: true
  end

  #本番環境用のオリジン設定も別途、必要

end
