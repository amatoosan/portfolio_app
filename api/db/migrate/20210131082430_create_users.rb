class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name, comment: 'ユーザー名'
      t.string :email, comment: 'メールアドレス'
      t.string :password_digest, comment: '確認用パスワード'

      t.timestamps
    end
  end
end
